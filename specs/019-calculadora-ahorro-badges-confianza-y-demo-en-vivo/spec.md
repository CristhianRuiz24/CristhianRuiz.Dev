# Especificación — Feature 019: Suite de Conversión Comercial: Calculadora Interactiva de Ahorro y ROI, Badges de Confianza Médica (NOM-004) y Demostración Consultiva en Vivo

**Estado:** 📝 En Revisión (Ajustada con estrategia de marketing digital para desarrolladores)  
**Fecha:** 2026-09-28  
**Referencia:** Constitución del Proyecto (`docs/constitution.md`), Features 001, 002, 013, 015 y 016.

---

## 1. Contexto y Justificación (Perspectiva de Marketing Digital para Software)

Tras un análisis competitivo exhaustivo de los actores dominantes en el sector salud en México y LATAM (**Doctoralia, Encuadrado, Kalyo.io, Mindly.la** y constructores DIY como **SiteW / Wix**), se identificaron los tres principales dolores no resueltos del psicólogo independiente:

1. **La Hemorragia Financiera del SaaS y Comisiones:**
   - Un psicólogo que utiliza directorios o plataformas SaaS (Doctoralia, Encuadrado, Kalyo) paga entre **$800 y más de $2,000 MXN mensuales**, lo que representa un gasto acumulado de **$28,800 a más de $72,000 MXN cada 3 años**, o peor aún, comisiones del 20% al 30% por consulta (Mindly).
   - Frente a esto, **CrisDev** ofrece un modelo de **propiedad de activo digital**: pago único ($4,800 a $5,900 MXN), costo de hosting de $0/mes y base de datos privada sin rentas recurrentes.
2. **La Trampa de los Constructores DIY (SiteW / Wix / WordPress):**
   - Muchos terapeutas caen en el embudo de "crea tu web gratis" de plataformas como SiteW o Wix. El costo oculto es devastador: pierden **más de 40 horas** intentando diseñar sin conocimientos técnicos, obtienen un sitio con apariencia amateur que devalúa su tarifa por consulta, y operan en la ilegalidad al no contar con expediente clínico cifrado bajo la normativa mexicana.
3. **El Costo del Ausentismo y Pacientes Perdidos:**
   - La deserción de pacientes por olvido de citas cuesta miles de pesos al mes. Las automatizaciones nativas de recordatorio por WhatsApp reducen el ausentismo en un 70%, permitiendo que el sistema de software se amortice solo en los primeros 90 días.
4. **La Desconfianza Médica y el Miedo a la Tecnología:**
   - Los psicólogos temen ser sancionados por violar el secreto profesional o no saber operar sistemas complejos.

Esta especificación formaliza la implementación de una **Suite de Conversión Comercial** en `index.html` que aborda estos cuatro dolores con rigor de ingeniería y psicología de ventas.

---

## 2. Principios de Diseño y Objetivos de Marketing

- **Tangibilización del Retorno de Inversión (ROI) Transparente:** La calculadora debe mostrar con total honestidad el ahorro neto considerando tanto el pago inicial como las renovaciones anuales transparentes ($0/mes en Paquete 01 y $4,990/año desde el año 2 en Paquete 02), demostrando cómo el sistema se amortiza además al evitar ausencias de pacientes.
- **Autoridad Técnica y Médica Inmediata:** Comunicar en el Hero que la arquitectura está diseñada conforme a los **lineamientos de la NOM-004-SSA3** para expediente clínico y almacena los datos en bases de datos PostgreSQL privadas, no compartidas con terceros.
- **Contraste "Ingeniería Llave en Mano vs. Sufrimiento DIY":** Evidenciar el valor de ahorrar 40+ horas de frustración técnica frente a constructores tipo Wix o SiteW.
- **Reducción Radical de Fricción Comercial:** Ofrecer un canal de contacto de bajo compromiso: una **demostración consultiva de 15 minutos en pantalla compartida** para despejar cualquier duda operativa antes de contratar.
- **Rendimiento Puro y Cero Dependencias:** Desarrollar todos los componentes interactivos con Vanilla JavaScript modular, CSS nativo con variables de diseño, compatibilidad total en modo claro y modo oscuro (*Clinical Deep Navy*) y salvaguarda móvil `minmax(0, 1fr)`.

---

## 3. Alcance Detallado (Scope)

### En Alcance (In Scope):

#### Componente 1: Badges de Confianza Médica y Normativa en el Hero (`index.html`)
- Franja horizontal estilizada ubicada en la columna izquierda del Hero bajo los botones de acción (`.hero-actions`).
- Tres sellos vectoriales con micro-iconos SVG técnicos (`stroke="currentColor"`, sin emojis de sistema):
  1. **Lineamientos NOM-004-SSA3:** Confidencialidad y estructura formal de notas y expedientes clínicos.
  2. **Base de Datos Privada (PostgreSQL):** Propiedad absoluta de los expedientes; los datos no pertenecen a ninguna plataforma externa.
  3. **0% Comisiones por Paciente:** Retención del 100% de los honorarios de consulta sin cargos ocultos.
- Adaptabilidad total a modo claro (`light`) y modo oscuro (`dark`).

#### Componente 2: Calculadora Interactiva de Ahorro y ROI a 3 Años (`#savings-calculator`)
- Bloque interactivo situado entre las secciones de Precios (`#pricing`) y Comparativa (`#comparison`).
- **Controles de entrada:**
  - Deslizador interactivo (*range slider*) de gasto mensual en plataformas/software: rango de **$500 a $3,000 MXN/mes** (paso de $100 MXN).
  - *Presets rápidos de un clic* con dolores del mercado:
    - Botón `Constructores DIY (Wix / SiteW)` ($400 MXN/mes + 40 horas perdidas).
    - Botón `Agenda SaaS (Encuadrado / Kalyo)` ($990 MXN/mes).
    - Botón `Directorio Médico (Doctoralia Starter)` ($1,350 MXN/mes).
    - Botón `Directorio Plus (Doctoralia Plus)` ($2,370 MXN/mes).
- **Métricas calculadas en tiempo real con matemática auditada:**
  - **Gasto acumulado en suscripciones a 3 años:** `Gasto_Mensual × 36`.
  - **Inversión acumulada en CrisDev a 3 años:**
    - Paquete 01: $4,800 MXN (hosting $0/mes, solo renovación de dominio ~$300-$500/año).
    - Paquete 02: $15,880 MXN ($5,900 primer año + $4,990/año en año 2 y año 3).
  - **Ahorro Neto en Efectivo a 3 años:** `Gasto_Acumulado_SaaS - Inversión_CrisDev_3Años`.
  - **Métrica de Recuperación por Ausentismo:** Recordatorio visual: *"Al automatizar recordatorios por WhatsApp y recuperar 2 citas mensuales ($1,600 MXN), tu sistema se amortiza en menos de 90 días."*
- **Llamada a la acción contextualizada:**
  - Botón interactivo: *"Quiero ahorrar este monto con mi plataforma propia"*, que abre WhatsApp precargando el monto exacto de ahorro calculado.

#### Componente 3: Opción de "Demostración Consultiva de 15 Minutos" en Contacto
- Selector interactivo en la sección de contacto (`#contact`):
  - Toggle / selector de intención: *"Consulta General"* vs. *"Agendar demo de 15 min en pantalla compartida"*.
- Adaptación dinámica del botón de WhatsApp para reflejar la solicitud de demostración sin compromiso.

#### Componente 4: Aseguramiento Técnico y Arquitectura
- Archivo CSS estructurado: `css/components/savings-calculator.css`.
- Módulo JavaScript Vanilla: `js/modules/savings-calculator.js`.
- Pruebas unitarias automatizadas en `tests/savings-calculator.test.js` ejecutables mediante `npm test`.

### Fuera de Alcance (Out of Scope):
- Modificación de los precios base estipulados en los paquetes comerciales de `#pricing`.
- Integración de pasarelas de pago transaccionales automáticas directas en la calculadora (la conversión se canaliza hacia contacto consultivo y WhatsApp).
- Generación de artículos masivos de blog con IA (la guía pilar editorial de SEO se planificará como una spec independiente de contenido).

---

## 4. Requisitos Funcionales (Notación EARS)

### Módulo 1: Badges de Confianza Médica en el Hero
- **RF-1.1 (Ubicuo):** EL SISTEMA renderizará en la sección Hero de `index.html` una franja de tres badges vectoriales con iconos SVG limpios que certifiquen el cumplimiento de la NOM-004-SSA3-2012, la propiedad de base de datos PostgreSQL privada y la ausencia de rentas y comisiones recurrentes.
- **RF-1.2 (Ubicuo):** EL SISTEMA adaptará el contraste, bordes y fondos de los badges según el tema activo (`data-theme="light"` o `data-theme="dark"`).
- **RF-1.3 (Ubicuo):** EL SISTEMA implementará flexbox/grid con la salvaguarda `minmax(0, 1fr)` para que en pantallas móviles (375px–430px) los badges fluyan sin generar desbordamiento horizontal.

### Módulo 2: Calculadora Interactiva de Ahorro y ROI a 3 Años
- **RF-2.1 (Ubicuo):** EL SISTEMA presentará la sección `#savings-calculator` en `index.html` estratégicamente ubicada entre `#pricing` y `#comparison`.
- **RF-2.2 (Evento):** CUANDO el usuario interactúe con el deslizador de gasto mensual (rango $500 a $3,000 MXN) o seleccione uno de los presets rápidos (`DIY`, `Agenda SaaS`, `Doctoralia`), EL SISTEMA actualizará instantáneamente:
  - El gasto acumulado en suscripciones a 36 meses.
  - El costo de inversión única de CrisDev.
  - El ahorro neto acumulado a 3 años.
  - El tiempo de amortización estimada en meses.
- **RF-2.3 (Ubicuo):** EL SISTEMA formateará todos los importes numéricos en formato de moneda mexicana legible (`$XX,XXX MXN`) utilizando tipografía monospace para acentos técnicos.
- **RF-2.4 (Estado):** MIENTRAS el paquete de referencia seleccionado en la calculadora alterne entre el Paquete 01 ($4,800) y el Paquete 02 ($5,900), EL SISTEMA recalculará en tiempo real el ahorro neto y actualizará el resumen comparativo.
- **RF-2.5 (Evento):** CUANDO el usuario haga clic en el botón de acción de la calculadora (*"Quiero este ahorro con mi plataforma propia"*), EL SISTEMA abrirá el enlace de WhatsApp o desplazará hacia `#contact` con el importe calculado precargado en el mensaje.

### Módulo 3: Canal de Demostración Consultiva en Pantalla Compartida
- **RF-3.1 (Ubicuo):** EL SISTEMA incorporará en el formulario de contacto (`#contact`) una opción seleccionable para solicitar una *"Demostración en vivo de 15 minutos en pantalla compartida"*.
- **RF-3.2 (Evento):** CUANDO la opción de demostración esté activa, EL SISTEMA actualizará el mensaje predeterminado del enlace de WhatsApp para solicitar formalmente la sesión de pantalla compartida.

### Módulo 4: Pruebas y Calidad de Código
- **RF-4.1 (Ubicuo):** EL SISTEMA mantendrá una cobertura del 100% de éxito en la suite automatizada de pruebas (`npm test`), incluyendo validaciones para la lógica matemática y los valores límites de la calculadora ($500, $1,500, $3,000 MXN).
- **RF-4.2 (Ubicuo):** EL SISTEMA garantizará que no existan errores ni advertencias en la consola del navegador al alternar entre modo claro y oscuro, y al mover el control deslizante.

---

## 5. Plan de Verificación y Criterios de Aceptación

1. **Pruebas Automatizadas Unitarias (`npm test`):**
   - Validación de la fórmula: `(gastoMensual * 36) - costoCrisDev`.
   - Comprobación de que para $1,800 MXN/mes (Doctoralia) con Paquete 02 ($5,900), el ahorro a 3 años es de **$58,900 MXN**.
   - Comprobación de que para $990 MXN/mes (Encuadrado) con Paquete 01 ($4,800), el ahorro a 3 años es de **$30,840 MXN**.
2. **Validación Interactiva en Navegador (Viewport Escritorio 1280px+):**
   - El deslizador responde con suavidad (60 fps) y actualiza los indicadores numéricos en tiempo real.
   - Los botones de presets rápidos asignan el valor y recalculan instantáneamente.
   - Los badges en el Hero se visualizan con iconos vectoriales limpios y micro-efectos neón coherentes con el diseño del sitio.
3. **Validación Visual en Viewport Móvil (375px a 430px):**
   - Ni los badges del Hero ni la calculadora generan scroll horizontal indeseado (`overflow-x`).
   - El control deslizante es perfectamente operable mediante toque táctil en pantallas pequeñas.
4. **Verificación Multi-Tema (Claro / Oscuro):**
   - En Modo Oscuro (*Clinical Deep Navy*): el slider, los badges y las tarjetas mantienen contraste AA y tonalidades cyan/azul/verde neón.
   - En Modo Claro: se preserva fondo clínico sobrio con tipografía nítida y contraste legible.
5. **Verificación de Conversión de Enlaces (CTAs):**
   - El botón de contacto o WhatsApp abre con el texto dinámico precargado:  
     `"Hola Cristhian, vi en la calculadora que puedo ahorrar $XX,XXX MXN en 3 años frente a plataformas mensuales. Me gustaría conocer más sobre mi plataforma propia..."`
