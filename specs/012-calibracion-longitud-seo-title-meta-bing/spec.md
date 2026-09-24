# Especificación de Requisitos — Feature 012: Calibración de Longitud de Title y Meta Description para Google y Bing

## 1. Contexto y Problema
En la inspección técnica de URL en Bing Webmaster Tools (`URL Inspection`), Bing detectó dos advertencias de calidad SEO técnico en `https://cristhianruiz.dev/`:
1. `Error: Title too long` (1 instancia encontrada): La etiqueta `<title>` actual contiene 74 caracteres (`CrisDev | Cristhian Ruiz — Software & Web Engineering para Psicoterapeutas`), superando el límite recomendado de 65 caracteres, lo que provoca truncamiento en SERPs móviles y de escritorio.
2. `Error: Meta Description too long or too short` (1 instancia encontrada): La etiqueta `<meta name="description">` actual contiene 185 caracteres, superando el límite estándar de 160 caracteres, cortando la propuesta de valor en los fragmentos de búsqueda.

## 2. Metas y Requisitos EARS
- **RF-1 (Calibración de `<title>`):**
  - *Cuando* un motor de búsqueda (Google, Bing) o usuario rastree `index.html`,
  - *el sistema debe* proveer una etiqueta `<title>` con una longitud estrictamente menor o igual a 65 caracteres (idealmente entre 50 y 60 caracteres),
  - conservando explícitamente la marca `CrisDev`, el nombre `Cristhian Ruiz` y la especialidad comercial (`Psicoterapeutas`).
  - *Valor objetivo:* `CrisDev | Cristhian Ruiz — Web para Psicoterapeutas` (51 caracteres).

- **RF-2 (Calibración de `<meta name="description">`):**
  - *Cuando* un motor de búsqueda procese el snippet de resumen de `index.html`,
  - *el sistema debe* proveer una etiqueta `<meta name="description">` con una longitud entre 120 y 160 caracteres (idealmente entre 145 y 155 caracteres),
  - sintetizando la propuesta de valor clínica: plataformas para psicólogos y terapeutas, agenda automatizada, expedientes NOM-004 y captación de pacientes sin comisiones.
  - *Valor objetivo:* `Desarrollo web y plataformas clínicas para psicólogos y terapeutas. Agenda automatizada, expedientes NOM-004 y captación de pacientes sin comisiones.` (151 caracteres).

- **RF-3 (Consistencia de Metadatos Open Graph y Twitter):**
  - *Cuando* se compartan enlaces en redes sociales o WhatsApp,
  - *el sistema debe* mantener consistencia temática sin alterar la imagen oficial de Open Graph (`og-image.png?v=4.0-crisp`) ni romper compatibilidad con `aviso-de-privacidad.html`.

- **RF-4 (Validación de Suite de Tests):**
  - *Cuando* se ejecuten las pruebas automatizadas del proyecto (`npm test`),
  - *el sistema debe* mantener el 100% de los tests pasando (16/16) sin regresiones en la integridad de enlaces, tokens CSS ni validaciones.

## 3. Criterios de Aceptación
1. `index.html` contiene `<title>` con longitud exacta <= 65 caracteres.
2. `index.html` contiene `<meta name="description">` con longitud entre 120 y 160 caracteres.
3. `npm test` ejecuta 16/16 pruebas pasando exitosamente.
4. La inspección en Bing Webmaster Tools resuelve ambas advertencias técnicas.
