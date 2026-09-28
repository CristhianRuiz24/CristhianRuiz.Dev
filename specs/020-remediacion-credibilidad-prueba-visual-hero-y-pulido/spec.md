# Especificación — Feature 020: Remediación de Credibilidad Numérica, Prueba Visual en Hero, Blindaje Legal y Pulido de Conversión

**Estado:** ⏳ Pendiente de Aprobación
**Fecha:** 2026-09-28  
**Referencia:** Constitución del Proyecto (`docs/constitution.md`), Features 013, 015 y 016, y Auditoría Externa de Conversión y UX.

---

## 1. Contexto y Diagnóstico

Tras una auditoría externa experta en copywriting B2B, conversión y experiencia visual, se identificó un veredicto determinante: **la plataforma posee una propuesta de valor sólida y profesional, pero sufre de inconsistencias matemáticas, riesgo en declaraciones legales, apariencia de plantilla por falta de interfaces reales en el Hero y detalles visuales que restan confianza.**

### Diagnósticos Críticos a Resolver:
1. **Contradicción Matemática en Cifras de Ahorro:**
   - En la sección `#comparison` de `index.html`, la tabla marca que Doctoralia cuesta $16,200 a $28,440/año y CrisDev $11,888 en el Año 1 ($5,900 instalación + 12 × $499 mantenimiento). Sin embargo, el texto de conclusión afirmaba un *"ahorro de más de $15,000 MXN desde el primer año"*. Matemáticamente $16,200 − $11,888 = $4,312 MXN.
   - En `comparativa-doctoralia.html`, se citaba una cifra no alineada de `$21,868 acumulados en 3 años`, cuando la tarifa real de CrisDev es $5,900 instalación + $4,990 (año 2) + $4,990 (año 3) = $15,880 MXN (o $20,870 si se computa la anualidad del año 1).
   - El ahorro contra el plan Starter ($48,600 a 3 años) es de ~$27,700 MXN, mientras que el ahorro superior a $40,000 o $60,000 solo se cumple contra el plan Doctoralia Plus ($85,320 a 3 años). La falta de especificación de planes destruía la credibilidad ante un prospecto analítico.
2. **Hero Monótono y Carente de Prueba Visual ("Aspecto de Plantilla"):**
   - Vender desarrollo web y software clínico sin mostrar interfaces en el primer pantallazo (*above the fold*) hace que la página parezca una plantilla genérica con solo texto centrado y botones. El prospecto necesita ver inmediatamente el software en acción: una agenda médica real y el diseño web representativo.
3. **Riesgo en Declaraciones Legales y Técnicas:**
   - La afirmación de "Cumplimiento NOM-004" sugiere una certificación oficial hospitalaria que en México emite COFEPRIS. Requiere ajustarse a *"Diseñado conforme a los lineamientos de confidencialidad de la NOM-004-SSA3"*.
   - El término "Alojamiento de por vida" en el Paquete 01 genera suspicacia ("¿de por vida de quién?"), debiendo recalibrarse a *"Alojamiento en infraestructura Cloudflare sin cuotas mensuales de servidor"*.
   - Las citas a competidores (Doctoralia) deben blindarse con una nota al pie con fecha explícita de consulta (septiembre de 2026).
4. **Identidad de Marca y Redes Sociales:**
   - El título "Ingeniero de Software" en México está sujeto a regulación de cédula profesional. Reemplazarlo por *"Desarrollador de Software y Plataformas Web"* elimina riesgos y mantiene la solidez técnica.
   - Enlaces de pie de página: Retirar LinkedIn por discordancia de slug (`cris-campos-...`), actualizar la página de Facebook a `https://www.facebook.com/people/CrisDev/61594210641667/` e incorporar la cuenta oficial de Instagram `https://www.instagram.com/_cris_dev_/`.
5. **Bug de Etiquetas en Tabla Desktop y Saturación en Móvil:**
   - En `css/components/comparison.css`, la clase `.comparison-mobile-label` carece de `display: none` fuera del breakpoint móvil, provocando que en pantallas grandes aparezca "Doctoralia" y "CrisDev" repetido dentro de cada celda.
   - Las tarjetas de precios en `#pricing` saturan al usuario con 8-10 viñetas pequeñas.
   - En móvil, el scroll largo carece de un acceso rápido de conversión. Se requiere un botón flotante de WhatsApp (`fab-whatsapp`).

---

## 2. Principios y Objetivos

- **Transparencia Matemática Irreprochable:** Cada número de ahorro, inversión y proyección debe coincidir al centavo con las tarifas públicas declaradas, detallando Año 1 vs Año 2 en adelante.
- **Impacto Visual Inmediato (Above the Fold):** Transformar el Hero en una experiencia de dos columnas en escritorio: titular persuasivo a la izquierda y un mockup de navegador con interfaz clínica viva a la derecha.
- **Blindaje Legal y Ético:** Cumplimiento de normativas de salud y comercio en México, deslindes claros y titularidad profesional impecable.
- **Optimización de UX y CRO:** Eliminar el bug CSS en pantallas de escritorio, aligerar las tarjetas de precios mediante un acordeón de detalles y habilitar contacto flotante en dispositivos móviles.

---

## 3. Alcance (Scope)

### En Alcance (In Scope):
- **Recalibración Numérica en Comparativas (`index.html`, `comparativa-doctoralia.html`, `llms.txt`, Schema.org):**
  - Desglose transparente de ahorro: Año 1 ($4,312 MXN contra Starter; >$16,500 MXN contra Plus con comisiones) y Año 2 en adelante ($11,210 a $23,450 MXN anuales recurrentes).
  - Cifras acumuladas a 3 años exactas ($20,870 MXN inversión total CrisDev vs $48,600 Starter y $85,320 Plus).
  - Nota al pie con fecha de consulta: *"Tarifas públicas recopiladas en planes anuales para México en septiembre de 2026"*.
- **Rediseño del Hero con Mockup Visual Interactivo/Gráfico (`index.html`, `css/components/hero.css`):**
  - Layout de 2 columnas en escritorio (`minmax(0, 1fr)`).
  - Marco de pantalla / tablet moderna a la derecha mostrando una maqueta visual pulida de la **Agenda Semanal de Consultas** (citas de pacientes ficticios, estados de confirmación por WhatsApp) y pestaña o botón para alternar a la vista previa del **Sitio Web de PsicoLau**.
- **Blindaje Legal, Título Profesional y Canales Sociales:**
  - Actualizar "Ingeniero de Software" a *"Desarrollador de Software y Plataformas Web"* en metadatos, banner de consola, Schema.org y sección Sobre Mí.
  - Suavizar textos de NOM-004 a *"Diseñado conforme a los lineamientos de la NOM-004-SSA3 para expediente clínico"*.
  - Actualizar "Hosting de por vida" a *"Alojamiento en Cloudflare sin mensualidades de servidor"*.
  - En pie de página y Schema.org: Quitar LinkedIn, actualizar Facebook a `https://www.facebook.com/people/CrisDev/61594210641667/` y añadir Instagram `https://www.instagram.com/_cris_dev_/`.
- **Pulido Visual y UX Móvil:**
  - Corregir en `css/components/comparison.css` para ocultar `.comparison-mobile-label` por defecto en pantallas de escritorio (`display: none;`).
  - Sintetizar las tarjetas de precios a las 5 viñetas principales de alto valor, añadiendo un contenedor colapsable sutil (`<details>` o botón acordeón *"Ver todo lo que incluye"*) para el resto de características.
  - Implementar un botón flotante de WhatsApp (`.fab-whatsapp`) en dispositivos móviles.
- **Sincronización de Partials y Pruebas Automatizadas:**
  - Ejecutar `npm run sync:partials` para replicar cambios en cabeceras/footers.
  - Actualizar suites en `tests/` para verificar integridad de enlaces sociales y exactitud de metadatos.

### Fuera de Alcance (Out of Scope):
- La implementación de la Calculadora Interactiva de Ahorro y ROI (queda formalmente pospuesta para la Feature 019/021 una vez estabilizada esta base).
- Crear un backend dinámico para el botón flotante (es un enlace semántico `https://wa.me/...`).

---

## 4. Requisitos Funcionales (Notación EARS)

### Módulo 1: Exactitud y Transparencia Matemática
- **RF-1.1 (Ubicuo):** EL SISTEMA presentará en la sección `#comparison` de `index.html` y en `comparativa-doctoralia.html` las cifras de inversión y ahorro con desglose explícito:
  - *Año 1:* Ahorro de **$4,312 MXN** frente a Doctoralia Starter ($16,200 vs $11,888) y de más de **$16,500 MXN** frente a planes con comisiones.
  - *Año 2 en adelante:* Ahorro anual recurrente de **$11,210 a $23,450 MXN**.
- **RF-1.2 (Ubicuo):** EL SISTEMA presentará en `comparativa-doctoralia.html` la proyección acumulada a 3 años de **$20,870 MXN** ($5,900 instalación + 3 anualidades de $4,990), reflejando un ahorro exacto de **$27,730 MXN** frente a Starter ($48,600) y de **$64,450 MXN** frente a Plus ($85,320).
- **RF-1.3 (Ubicuo):** EL SISTEMA incluirá una nota visible al pie de las tablas comparativas indicando: *"Tarifas públicas consultadas en septiembre de 2026 para planes anuales en México. No incluye el impacto de las comisiones del 15% al 20% por cita online cobradas por plataformas intermediarias."*
- **RF-1.4 (Ubicuo):** EL SISTEMA sincronizará los metadatos JSON-LD (`FAQPage`) y el archivo `/llms.txt` con estas cifras auditadas.

### Módulo 2: Interfaz Real y Mockup Visual en el Hero
- **RF-2.1 (Estado):** MIENTRAS la pantalla tenga un ancho igual o superior a 1024px, EL SISTEMA mostrará la sección Hero (`#hero`) en un layout de dos columnas balanceadas (`minmax(0, 1fr)`).
- **RF-2.2 (Ubicuo):** EL SISTEMA ubicará en la columna izquierda del Hero el título, descripción de valor, mantra, CTAs principales y las pastillas de confianza.
- **RF-2.3 (Ubicuo):** EL SISTEMA mostrará en la columna derecha del Hero un marco de ventana moderno (`.hero-mockup-frame`) con barra de estado clínica y selector de vista previa con dos modos:
  - *Modo 1 (Predeterminado - Gestión de Consultas):* Muestra la interfaz de la Agenda Semanal con calendario de citas, nombres de pacientes ficticios, horarios y estatus de confirmación.
  - *Modo 2 (Presencia Digital):* Muestra la vista en miniatura del escaparate web de PsicoLau con llamado a la acción.
- **RF-2.4 (Evento):** CUANDO el usuario pulse una de las pestañas del selector en el mockup (`.hero-mockup-tab`), EL SISTEMA conmutará la vista activa sin recargar la página y actualizará los atributos de accesibilidad `aria-selected`.
- **RF-2.5 (Estado):** MIENTRAS la pantalla tenga un ancho inferior a 1024px (tablets y móviles), EL SISTEMA apilará verticalmente el mockup debajo de los CTAs del Hero, garantizando legibilidad y escala fluida.

### Módulo 3: Blindaje Legal, Titulación y Redes Sociales
- **RF-3.1 (Ubicuo):** EL SISTEMA sustituirá el título "Ingeniero de Software" por *"Desarrollador de Software y Plataformas Web"* en la sección Sobre Mí (`#operator`), metadatos y banner de bienvenida de consola (`terminal-effects.js`).
- **RF-3.2 (Ubicuo):** EL SISTEMA modificará cualquier mención a "Cumplimiento NOM-004" por *"Diseñado conforme a los lineamientos de confidencialidad de la NOM-004-SSA3 para expediente clínico"*.
- **RF-3.3 (Ubicuo):** EL SISTEMA modificará cualquier mención a "Hosting de por vida" por *"Alojamiento en infraestructura Cloudflare sin cuotas mensuales de servidor"*.
- **RF-3.4 (Ubicuo):** EL SISTEMA retirará el enlace a LinkedIn del pie de página (`partials/footer.html`, `index.html`, `aviso-de-privacidad.html`, `comparativa-doctoralia.html`).
- **RF-3.5 (Ubicuo):** EL SISTEMA actualizará el enlace de Facebook a `https://www.facebook.com/people/CrisDev/61594210641667/` e integrará el enlace oficial de Instagram `https://www.instagram.com/_cris_dev_/` con atributo `rel="noopener noreferrer"`.

### Módulo 4: Pulido Visual, Corrección CSS y Conversión Móvil
- **RF-4.1 (Ubicuo):** EL SISTEMA declarará `display: none;` por defecto en `.comparison-mobile-label`, mostrándolo como `display: block;` únicamente dentro del media query `@media (max-width: 767px)`, erradicando la duplicación de textos en pantallas de escritorio.
- **RF-4.2 (Ubicuo):** EL SISTEMA sintetizará las tarjetas de precios en `#pricing` mostrando las 5 viñetas principales más persuasivas por defecto, y agrupando las características complementarias en un contenedor desplegable accesible (`<details class="pricing-details-toggle">`) con la etiqueta *"Ver todo lo que incluye"*.
- **RF-4.3 (Ubicuo):** EL SISTEMA incorporará un botón flotante de WhatsApp (`.fab-whatsapp`) fijado en la esquina inferior derecha con icono SVG, enlace directo con mensaje comercial precargado y tooltip accesible.
- **RF-4.4 (Estado):** MIENTRAS la pantalla tenga un ancho superior a 768px (escritorio), EL SISTEMA ocultará el botón flotante de WhatsApp para no interferir con la navegación ni sobrecargar la vista.

---

## 5. Plan de Verificación

1. **Auditoría Matemática y de Enlaces (`npm test`):**
   - Ejecutar la suite automatizada para validar integridad de todos los enlaces internos y externos (Facebook e Instagram activos, 0 referencias rotas a LinkedIn).
2. **Validación Visual en Navegador (Desktop 1280px+):**
   - Confirmar que el Hero despliega el layout de 2 columnas con el mockup interactivo a la derecha.
   - Confirmar que alternar entre "Agenda de Consultas" y "Página Web" conmuta suavemente la vista previa.
   - Verificar la tabla de comparación en `#comparison`: comprobar que ninguna celda de escritorio muestra las etiquetas móviles duplicadas.
   - Verificar que las tarjetas de precios muestran 5 viñetas y el desplegable *"Ver todo lo que incluye"* funciona con suavidad.
3. **Validación Visual en Navegador (Mobile 375px a 430px):**
   - Verificar que el mockup del Hero se adapta sin desbordamientos (`overflow-x: hidden`).
   - Confirmar la presencia y visibilidad del botón flotante de WhatsApp (`.fab-whatsapp`) con posición ergonómica para el pulgar.
   - Confirmar que la tabla móvil conserva sus etiquetas y legibilidad intacta.
4. **Verificación de Consola:**
   - Confirmar que la consola del navegador arroja **0 errores y 0 advertencias de JavaScript**.
