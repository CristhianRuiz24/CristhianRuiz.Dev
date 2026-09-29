# Especificación — Feature 021: Remediación de Calculadora de Ahorro, ROI Real y Blindaje Comercial

**Estado:** ⏳ Pendiente de Aprobación  
**Fecha:** 2026-09-28  
**Referencia:** Constitución del Proyecto (`docs/constitution.md`), Feature 019 y Feature 020.

---

## 1. Contexto y Diagnóstico

Durante las pruebas de usuario de la **Calculadora Interactiva de Ahorro y ROI** (`#savings-calculator`), se detectaron discrepancias y errores críticos de conversión que afectan la credibilidad técnica y comercial del sitio ante un profesional de la salud:

### Problemas Críticos Identificados:

1. **Ahorro Negativo presentado erróneamente como Beneficio Exitoso (`$-1,480 MXN`):**
   - Al seleccionar un gasto mensual bajo ($400 MXN/mes, correspondiente al preset *Constructores DIY / Wix*) teniendo activo el **Paquete 02 (Web + Panel Clínico)**:
     - Gasto externo a 3 años: $400 × 36 = **$14,400 MXN**.
     - Inversión en CrisDev Paquete 02: **$15,880 MXN** ($5,900 inicial + $4,990 año 2 + $4,990 año 3).
     - Resultado: **`$-1,480 MXN`** (un gasto neto adicional de $1,480 frente a Wix).
   - **Fallas de renderizado y lógica asociadas:**
     - La tarjeta se muestra en **verde esmeralda** (`.card-featured`), felicitando al usuario por un ahorro que no existe.
     - El formato monetario renderiza `$-1,480 MXN` (signo de pesos antes del signo negativo) en vez del formato estándar `-$1,480 MXN`.
     - El copy inferior de la tarjeta afirma *"Dinero que se queda en tu consultorio privado en vez de pagar comisiones y rentas"*, entrando en abierta contradicción con el número negativo.
     - El badge de amortización declara *"✓ Se amortiza en ~15 meses"*, lo cual es una **falsedad matemática**: el cálculo simplemente dividió `$5,900 / $400 = 14.75 → 15 meses`, ignorando que el mantenimiento anual de $4,990/año (~$415.83/mes) supera la cuota mensual de $400, por lo que **nunca** se amortiza sólo con la mensualidad.
     - El enlace de WhatsApp construye un mensaje inverosímil: *"Hola Cristhian, calculé en tu sitio un ahorro de $-1,480 MXN a 3 años..."*.

2. **Comparación Asimétrica de Alcance ("Peras con Manzanas"):**
   - Wix ($400 MXN/mes) es un constructor web genérico: no provee base de datos clínica privada PostgreSQL, ni expedientes conforme a NOM-004, ni agenda médica con confirmación automática por WhatsApp.
   - El competidor real de Wix es el **Paquete 01 (Solo Web)**:
     - Inversión CrisDev: $4,800 MXN pago único ($0/mes hosting Cloudflare).
     - Wix a 3 años: $14,400 MXN.
     - **Ahorro real comprobable:** **+$9,600 MXN** (amortizado en 12 meses).
   - Por su parte, el **Paquete 02** sustituye software médico y agendas especializadas: **Encuadrado ($990/mes)**, **Doctoralia Starter ($1,350/mes)** o **Doctoralia Plus ($2,370/mes)**, donde el ahorro neto sí es de **+$19,760 MXN** a **+$69,440 MXN**.

3. **Falta de Asociación Inteligente entre Presets del Mercado y Solución CrisDev:**
   - Hacer clic en los botones de presets del mercado únicamente movía el slider de valor, sin vincular el paquete que realmente compite con dicha herramienta, dejando expuesto al usuario a combinaciones incoherentes.

4. **Banner Inferior de Ausentismo No Contextual:**
   - El bloque inferior menciona exclusivamente la recuperación de citas canceladas mediante recordatorios de WhatsApp (~$1,600 MXN). Esto es 100% verídico para el **Paquete 02**, pero confuso para el **Paquete 01** (que es exclusivamente presencia web sin panel de recordatorios).

---

## 2. Principios y Objetivos

- **Honestidad Matemática Absoluta:** Ningún escenario del cotizador debe mostrar números negativos en verde, ni badges de amortización irreales, ni mensajes de WhatsApp con pérdidas.
- **Asociación Asistida (Guía Inteligente):** Al interactuar con referencias de mercado, la calculadora debe orientar al terapeuta hacia la solución idónea (Wix → Paquete 01; Agendas y Directorios → Paquete 02).
- **Modo Consultivo Preventivo:** Si el usuario elige manualmente una combinación con déficit económico o ahorro nulo, la tarjeta debe transformarse en una vista consultiva sobria, explicando el alcance y sugiriendo la opción adecuada.
- **Copy Contextual según Paquete:** Las métricas de retorno colaterales (captación de nuevos pacientes vs. mitigación de ausentismo) deben adaptarse al paquete evaluado.

---

## 3. Alcance (Scope)

### En Alcance (In Scope):
- **Vinculación Reactiva de Presets a Paquetes (`index.html`, `js/modules/savings-calculator.js`):**
  - Preset *Constructores DIY (Wix ~$400)* conmuta automáticamente a **Paquete 01 (Solo Web)**.
  - Preset *Agendas SaaS (Encuadrado ~$990)* conmuta automáticamente a **Paquete 02 (Web + Panel)**.
  - Preset *Doctoralia Starter (~$1,350)* conmuta automáticamente a **Paquete 02 (Web + Panel)**.
  - Preset *Doctoralia Plus (~$2,370)* conmuta automáticamente a **Paquete 02 (Web + Panel)**.
  - Se preserva la libertad de que el terapeuta pueda alternar de paquete manualmente en cualquier momento.
- **Estado Consultivo para Casos Límite (`netSavings <= 0`):**
  - Cuando el ahorro neto calculado a 3 años sea menor o igual a cero (ej. Paquete 02 forzado con mensualidad < $442 MXN/mes):
    - Retirar clase `.card-featured` (eliminar fondo verde y texto esmeralda).
    - Asignar clase `.card-consultative` con estilo azul/neutro sobrio.
    - Ocultar badge de amortización ficticio.
    - Mostrar titular *"Comparativa de Alcance y Propósito"*.
    - Desplegar explicación pedagógica: *"Para páginas web básicas ($400/mes), tu opción óptima es el Paquete 01 (ahorras +$9,600 MXN). El Paquete 02 incluye consultorio inteligente con expediente NOM-004 y recordatorios por WhatsApp para sustituir agendas SaaS."*.
    - Incluir botón interactivo de un clic: *"Ver Ahorro con Paquete 01"*.
- **Corrección de Formato Monetario (`formatCurrencyMXN`):**
  - Soporte impecable para montos negativos: ante números negativos renderizar `-$X,XXX MXN` (signo negativo antes del signo monetario).
- **Recalibración del Cálculo de Amortización (`roiMonths`):**
  - Para Paquete 01: `Math.ceil(4800 / expense)` (válido siempre que expense > 0).
  - Para Paquete 02:
    - Si `expense >= 492 MXN/mes`: Amortización en el Año 1 calculada como `Math.ceil(5900 / expense)` meses.
    - Si `expense < 492 MXN/mes` y `netSavings > 0`: Amortización proyectada en meses reales considerando los pagos de renovación del año 2.
    - Si `netSavings <= 0`: Retornar `0` (sin amortización por mensualidad de renta).
- **Adaptación Dinámica del Botón y Mensaje de WhatsApp:**
  - Cuando `netSavings > 0`: Mensaje estándar con ahorro positivo calculado.
  - Cuando `netSavings <= 0`: Cambiar texto del botón a *"Solicitar asesoría para mi consultorio"* y mensaje de WhatsApp a: *"Hola Cristhian, estuve usando la calculadora y me gustaría que me asesores sobre qué paquete me conviene más para mi consultorio."*.
- **Banner de Retorno Contextual:**
  - Si `packageType === 'pkg1'`: Texto enfocado en captación (*"Con captar solo 1 o 2 pacientes nuevos al año gracias a tu web propia sin comisiones, recuperas la inversión de por vida."*).
  - Si `packageType === 'pkg2'`: Texto enfocado en ausentismo (*"Al enviar recordatorios automáticos por WhatsApp y recuperar solo 2 citas mensuales que antes se cancelaban por olvido (~$1,600 MXN), el software se amortiza solo en tus primeros 90 días."*).
- **Pruebas Automatizadas en Node.js:**
  - Pruebas unitarias para formateo monetario con signo negativo.
  - Pruebas para amortización en Paquete 01 y 02.
  - Pruebas de detección del estado consultivo (`netSavings <= 0`).
  - Pruebas de generación de enlaces de WhatsApp en ambos estados.

### Fuera de Alcance (Out of Scope):
- Modificar las tarifas base aprobadas en Feature 019/020 ($4,800 MXN para Paquete 01 y $5,900 + $4,990/año para Paquete 02).
- Añadir pasarelas de pago o cotizadores con checkout en línea (la venta sigue cerrándose por WhatsApp).

---

## 4. Requisitos Funcionales (Notación EARS)

### Módulo 1: Formato Monetario y Lógica Matemática
- **RF-1.1 (Ubicuo):** EL SISTEMA formateará los valores monetarios con separadores de miles y el sufijo `MXN`.
- **RF-1.2 (Excepción):** SI el valor monetario a formatear es negativo, ENTONCES EL SISTEMA antepondrá el signo negativo antes del símbolo de moneda (`-$X,XXX MXN`).
- **RF-1.3 (Ubicuo):** EL SISTEMA computará el ahorro neto a 3 años restando la inversión total CrisDev ($4,800 para `pkg1` y $15,880 para `pkg2`) del acumulado de rentas a 36 meses (`gastoMensual × 36`).
- **RF-1.4 (Estado):** MIENTRAS `packageType === 'pkg1'` y `gastoMensual > 0`, EL SISTEMA calculará el tiempo de amortización como `Math.ceil(4800 / gastoMensual)` meses.
- **RF-1.5 (Estado):** MIENTRAS `packageType === 'pkg2'` y `gastoMensual >= 492`, EL SISTEMA calculará el tiempo de amortización durante el primer año como `Math.ceil(5900 / gastoMensual)` meses.
- **RF-1.6 (Excepción):** SI `netSavings <= 0`, ENTONCES EL SISTEMA asignará `roiMonths = 0` y declarará el estado como `isConsultative = true`.

### Módulo 2: Vinculación Inteligente de Presets
- **RF-2.1 (Evento):** CUANDO el usuario haga clic en el preset de *Constructores DIY (Wix)* ($400/mes), EL SISTEMA ajustará el slider a 400 y seleccionará automáticamente el **Paquete 01 (Solo Web)**.
- **RF-2.2 (Evento):** CUANDO el usuario haga clic en el preset de *Agendas SaaS (Encuadrado)* ($990/mes), EL SISTEMA ajustará el slider a 990 y seleccionará automáticamente el **Paquete 02 (Web + Panel)**.
- **RF-2.3 (Evento):** CUANDO el usuario haga clic en el preset de *Doctoralia Starter* ($1,350/mes), EL SISTEMA ajustará el slider a 1350 y seleccionará automáticamente el **Paquete 02 (Web + Panel)**.
- **RF-2.4 (Evento):** CUANDO el usuario haga clic en el preset de *Doctoralia Plus* ($2,370/mes), EL SISTEMA ajustará el slider a 2370 y seleccionará automáticamente el **Paquete 02 (Web + Panel)**.
- **RF-2.5 (Evento):** CUANDO el usuario alterne manualmente entre `Paquete 01` y `Paquete 02`, EL SISTEMA preservará el valor actual del slider y recalculará la vista sin modificar forzosamente el slider.

### Módulo 3: Estado Visual Consultivo y Prevención de Incoherencias
- **RF-3.1 (Estado):** MIENTRAS `netSavings > 0`, EL SISTEMA presentará la tarjeta de ahorro con estilo destacado (`.card-featured`), monto en verde esmeralda con prefijo `+`, y el badge de amortización con icono de check.
- **RF-3.2 (Estado):** MIENTRAS `netSavings <= 0`, EL SISTEMA:
  - Removerá la clase `.card-featured` y aplicará la clase `.card-consultative`.
  - Ocultará el badge de amortización por mensualidad.
  - Mostrará el titular *"Comparativa de Alcance y Propósito"*.
  - Mostrará el texto explicativo orientando al usuario hacia el Paquete 01.
  - Presentará un botón interactivo *"Cambiar a Paquete 01 (Ahorro de +$9,600 MXN)"* que al pulsarse seleccione el Paquete 01.
- **RF-3.3 (Estado):** MIENTRAS `netSavings <= 0`, EL SISTEMA actualizará el enlace y texto del botón de WhatsApp a *"Solicitar asesoría para mi consultorio"* con el mensaje: *"Hola Cristhian, estuve usando la calculadora y me gustaría que me asesores sobre qué paquete me conviene más para mi consultorio."*.

### Módulo 4: Banner de Retorno de Inversión Contextual
- **RF-4.1 (Estado):** MIENTRAS el `Paquete 01` esté seleccionado, EL SISTEMA mostrará en el banner inferior: *"El valor de tener tu propia web: Al captar solo 1 o 2 pacientes nuevos al año gracias a tu sitio web sin pagar comisiones por consulta, recuperas la inversión total de por vida."*.
- **RF-4.2 (Estado):** MIENTRAS el `Paquete 02` esté seleccionado, EL SISTEMA mostrará en el banner inferior: *"El valor oculto de no perder pacientes: Al enviar recordatorios automáticos por WhatsApp y recuperar solo 2 citas mensuales que antes se cancelaban por olvido (~$1,600 MXN), el software se amortiza solo en tus primeros 90 días."*.

---

## 5. Criterios de Aceptación y Verificación

1. **Pruebas Unitarias Automatizadas (`npm test`):**
   - 100% de las pruebas pasando en `tests/savings-calculator.test.js`.
   - Cobertura explícita de casos: $400 en pkg1 (+$9,600 MXN), $400 en pkg2 (estado consultivo, netSavings <= 0, roiMonths = 0), $990 en pkg2 (+$19,760 MXN, roi ~6 meses), $1,350 en pkg2 (+$32,720 MXN, roi ~5 meses), $2,370 en pkg2 (+$69,440 MXN, roi ~3 meses).
2. **Validación Visual en Navegador:**
   - Cero renders de `$-X,XXX` o números negativos en verde.
   - Presets activan limpiamente el paquete recomendado.
   - Forzar Paquete 02 con $400/mes activa el estado `.card-consultative` con diseño sobrio y botón para volver a Paquete 01.
   - 0 errores y 0 warnings en consola de JavaScript.
