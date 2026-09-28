# Hogar Patitas

Sitio web estático para un proyecto académico de adopción de mascotas. Desarrollado con HTML, CSS y JavaScript puro, sin frameworks ni dependencias.

## Ejecutar localmente
Abre `index.html` en tu navegador. Para una experiencia más cercana al despliegue, puedes usar la extensión Live Server de VS Code.

## Desplegar en Vercel
1. Sube el contenido de esta carpeta a un repositorio GitHub.
2. Entra a https://vercel.com/new e importa el repositorio.
3. Selecciona **Other** como framework preset.
4. Deja Build Command y Output Directory vacíos (o usa `.` como directorio de salida).
5. Presiona Deploy.

También puedes instalar Vercel CLI y ejecutar `vercel` desde esta carpeta.

## Funciones de demostración
- Catálogo de mascotas con búsqueda y filtros por especie, edad y tamaño.
- Favoritos en memoria durante la sesión.
- Formularios de solicitud de adopción, registro, donación, voluntariado y refugios.
- Diseño responsive y menú móvil.

## Importante
Esta es una interfaz frontend de demostración. Los formularios no guardan información ni envían datos a un servidor; el login no autentica usuarios y las donaciones no procesan pagos. Para una plataforma real se debe conectar un backend/API, base de datos, autenticación segura y proveedor de pagos. Las mascotas y refugios mostrados son datos ilustrativos.
