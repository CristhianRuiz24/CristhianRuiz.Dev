# Plan Técnico — Feature 012: Calibración de Longitud de Title y Meta Description

## 1. Arquitectura y Archivos Afectados
El cambio es quirúrgico y se concentra exclusivamente en las etiquetas `<head>` de `index.html`:
- `index.html`:
  - Línea 6: `<title>` ajustado a 51 caracteres.
  - Línea 9: `<meta name="description">` ajustado a 151 caracteres.

## 2. Estrategia de Calibración
1. **Title:**
   - Anterior: `CrisDev | Cristhian Ruiz — Software & Web Engineering para Psicoterapeutas` (74 chars -> 9 chars por encima del umbral de 65).
   - Nuevo: `CrisDev | Cristhian Ruiz — Web para Psicoterapeutas` (51 chars -> rango óptimo 50-60 chars).
2. **Meta Description:**
   - Anterior: `Desarrollo web de alta conversión y plataformas clínicas privadas para psicólogos y terapeutas con consulta privada. Agenda automatizada, notas de evolución NOM-004-SSA3 y cero comisiones.` (185 chars -> 25 chars por encima del umbral de 160).
   - Nueva: `Desarrollo web y plataformas clínicas para psicólogos y terapeutas. Agenda automatizada, expedientes NOM-004 y captación de pacientes sin comisiones.` (151 chars -> rango óptimo 145-155 chars).

## 3. Plan de Verificación
1. Ejecución de script de medición de longitud de caracteres con Node.js.
2. Ejecución de `npm test` verificando que los 16 tests de integridad pasen.
3. Despliegue en Git (`origin/main`) previa autorización.
