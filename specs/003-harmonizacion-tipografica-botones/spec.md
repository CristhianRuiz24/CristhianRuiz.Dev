# Spec 003 — Armonización Tipográfica de Botones Comerciales y Elementos de Lectura

## Contexto y objetivo
Actualmente, los botones comerciales e interactivos del sitio (`.btn`, `.btn-primary`, `.btn-secondary`, `.btn-submit`) tienen asignada la tipografía monospace de código **`JetBrains Mono`** (`--font-mono`) con transformación forzada a mayúsculas (`text-transform: uppercase`). 

Esto provoca una desconexión visual y estética entre:
1. La tipografía principal de la marca (**`Plus Jakarta Sans`**, redonda, cálida, estética SaaS médica y de alta conversión).
2. El texto de los botones principales (*"Consultar por WhatsApp"*, *"Ver Planes y Precios"*, *"Elegir Plan"*, etc.), que se perciben rígidos, anchos y con apariencia de consola técnica de programación.
3. Palabras de lectura en métricas como *"Privada"* en el caso de estudio de PsicoLau, que al heredar `.stat-number` se renderizan con caracteres monospace de máquina de escribir.

El objetivo de esta especificación es dar estricto cumplimiento al principio constitucional estipulado en [docs/constitution.md](file:///c:/Users/crist/Documents/Proyectos/Pagina%20web%20CrisDev%20-%20clientes/docs/constitution.md) y [AGENTS.md](file:///c:/Users/crist/Documents/Proyectos/Pagina%20web%20CrisDev%20-%20clientes/AGENTS.md):
> *"Tipografía: Monospace únicamente para métricas, metadatos y acentos técnicos; Sans-serif para textos de lectura."*

Unificando los botones comerciales y palabras descriptivas bajo **`Plus Jakarta Sans`** (`--font-sans`), preservando **`JetBrains Mono`** (`--font-mono`) exclusivamente para valores numéricos, horas, precios y rutas técnicas.

---

## Usuarios / actores
- **Prospecto Profesional de la Salud (Psicólogos, Terapeutas, Médicos):** Espera una experiencia visual cálida, confiable, legible y humana. Los botones deben invitar a la acción con claridad y estética médica moderna sin sentirse abrumados por tipografías de programador.
- **Ingeniero / Operador (Cristhian Ruiz):** Requiere que el sitio conserve su carácter técnico mediante acentos discretos en monospace (cifras, puertos, horas y metadatos) sin comprometer la usabilidad ni la armonía visual de las llamadas a la acción comerciales.

---

## Historias de usuario
- **H1 (Coherencia Visual y Calidez en Botones):** Como visitante interesado en agendar o cotizar, quiero que los botones principales ("Consultar por WhatsApp", "Ver Planes y Precios") utilicen la misma tipografía elegante y legible del resto de la página (`Plus Jakarta Sans`), para que la interfaz se sienta pulcra, médica y coherente.
- **H2 (Jerarquía Tipográfica en Métricas):** Como usuario que revisa los casos de estudio (PsicoLau), quiero que las cifras y porcentajes se muestren en monospace técnico, pero que las palabras descriptivas como *"Privada"* se lean de forma natural en sans-serif.
- **H3 (Consistencia Multi-Dispositivo y Multi-Tema):** Como visitante en móvil o escritorio, en modo claro o modo oscuro, quiero que los botones mantengan legibilidad superior, peso equilibrado (600/700) y espaciado armónico sin desbordar contenedores.

---

## Requisitos funcionales (Criterios de aceptación en EARS)

### 1. Tipografía Base de Botones Comerciales (`.btn`)
- **RF-1 (Ubicuo):** EL SISTEMA asignará `font-family: var(--font-sans)` (`Plus Jakarta Sans`) a la clase base `.btn` y sus variantes interactivas (`.btn-primary`, `.btn-secondary`, `.btn-submit`, `.btn-block`).
- **RF-2 (Ubicuo):** EL SISTEMA configurará para los botones un peso tipográfico semi-negrita a negrita (`font-weight: 600` o `700`) con espaciado entre letras natural (`letter-spacing: -0.01em` o `normal`), eliminando la apariencia rígida de espaciado monospace.
- **RF-3 (Ubicuo):** EL SISTEMA permitirá la visualización en mayúsculas y minúsculas naturales (Title Case / Sentence Case: *"Consultar por WhatsApp"*, *"Ver Planes y Precios"*, *"Cotizar a Medida"*), eliminando `text-transform: uppercase` forzado para mejorar la legibilidad y el tono humano.

### 2. Tratamiento de Métricas y Palabras Descriptivas
- **RF-4 (Ubicuo):** EL SISTEMA mantendrá `font-family: var(--font-mono)` (`JetBrains Mono`) para todos los valores numéricos y métricas cuantitativas (`24/7`, `0%`, `100%`, cifras de precios `$4,990`, `$499`).
- **RF-5 (Excepción):** EN LA TARJETA DE CASO PSICOLAU, DONDE la métrica contenga la palabra *"Privada"* en lugar de un número, EL SISTEMA asignará `font-family: var(--font-sans)` para renderizar el texto en tipografía sans-serif cálida, conservando el tamaño y color de acento.

### 3. Preservación de Acentos Técnicos Justificados
- **RF-6 (Ubicuo):** EL SISTEMA preservará `font-family: var(--font-mono)` en los elementos de infraestructura y auditoría médica:
  - Selector de ruta en el navegador del mockup (`panel.psicolau.com / expediente`).
  - Horas de agenda en la Suite Clínica (`08:00 AM`, `10:30 AM`, `LUN 31`).
  - Metadatos de auditoría y fechas (`Mié 2 Sep 2026 — 11:45 a.m.`).
  - Etiquetas de sistema (`.section-tag`, `.operator-id`).
  - Bloques de código o chips criptográficos (`AES-256`).

### 4. Coherencia en Ambos Modos (Claro y Oscuro)
- **RF-7 (Ubicuo):** EL SISTEMA garantizará que la tipografía `Plus Jakarta Sans` en los botones mantenga contraste accesible WCAG AA (> 4.5:1) tanto en Modo Claro como en Modo Oscuro (`data-theme="dark"`).

---

## Casos límite y excepciones
- **SI** un botón contiene un icono SVG complementario (ej. icono de WhatsApp o flecha `→`), **ENTONCES EL SISTEMA** mantendrá la alineación vertical centrada (`align-items: center; gap: 0.65rem`) sin desfases de línea base entre el icono y la fuente `Plus Jakarta Sans`.
- **SI** un botón interactivo pertenece exclusivamente al panel interno de simulación clínica (ej. `.btn-mock-copy` o `.expediente-action-btn`), **ENTONCES EL SISTEMA** podrá conservar `font-mono` sutil si representa una acción de terminal o script interno, manteniendo los botones públicos en `font-sans`.

---

## Lo que queda fuera de alcance (Out of Scope)
- No se incorporarán fuentes externas adicionales (se trabaja exclusivamente con las dos fuentes aprobadas: `Plus Jakarta Sans` y `JetBrains Mono`).
- No se modificarán las dimensiones ni el padding de los botones que ya cumplen con el área de toque táctil mínima (44x44px).
- No se modificará el copy ni los destinos de los enlaces de los botones.
