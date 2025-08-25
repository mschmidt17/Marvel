🦸‍♂️ Marvel App
🔹 Introducción

Esta prueba consiste en la creación de una pequeña aplicación para obtener información sobre personajes de Marvel.
La app está desarrollada en React + TypeScript, usando Context API para el manejo de estado y Styled Components para los estilos.

🖥️ Vistas

1️⃣ Vista principal - Listado de personajes

Muestra un listado de 50 personajes o el resultado de la búsqueda.

Barra de búsqueda para filtrar personajes por nombre (ej: "Spider").

Icono de favoritos con contador.

Al hacer clic en un personaje, se redirige a la vista de detalle.

Posibilidad de marcar/desmarcar favoritos y persistirlos entre vistas.

Al hacer clic en el icono superior de favoritos, se filtran únicamente los personajes favoritos.

2️⃣ Vista de detalle de personaje

Muestra imagen, nombre, descripción y cómics del personaje (máx. 20).

Icono de favoritos para marcar/desmarcar.

Navegación de vuelta a la vista principal mediante el logo de Marvel.

Los cómics se muestran ordenados por fecha de salida.

🎨 Diseño

La aplicación es responsive, siguiendo los diseños propuestos en Figma.

Se utilizaron animaciones simples con keyframes en Styled Components.

Todos los componentes fueron desarrollados desde cero (sin librerías tipo Material UI o AntD).

⚡ Stack

TypeScript

React >=17

Node >=18

Styled Components

Context API para manejo de estado

Axios para consumo de API Marvel

🔧 Modo de desarrollo y producción

Desarrollo: assets sin minimizar, con hot-reload.

Producción: assets concatenados y minimizados.

💻 Comandos

# Instalar dependencias

npm install

# Ejecutar en modo desarrollo

npm run dev

# Construir para producción

npm run build

# Ejecutar versión de producción local

npm run serve

# Ejecutar tests

npm run test

🧪 Testing

Se implementaron tests unitarios con Vitest + Testing Library.

Se validan renderizados, interacciones y lógica de favoritos.

🧹 Linter y formateo

ESLint con reglas para React y TypeScript.

Prettier para formateo automático.

La consola del navegador está limpia de errores y warnings.

🔄 Pre-commit con Husky

Se configuró Husky para asegurar que los commits sigan las convenciones:

feat: nueva funcionalidad

fix: corrección de bugs

chore: tareas de mantenimiento

refactor: refactorización de código

🔧 Configuración

# Instalar Husky

npm install husky --save-dev

# Inicializar Husky

npx husky install

# Crear pre-commit hook para correr lint

npx husky add .husky/pre-commit "npm run lint"

🌐 API Marvel

URL base: http://gateway.marvel.com/v1/

Documentación oficial: Marvel API

Mock de datos utilizado para desarrollo cuando la API falla.

🗂️ Estructura del proyecto
src/
├─ api/ # Servicios API
├─ components/ # Componentes reutilizables
├─ hooks/ # Hooks personalizados
├─ store/ # Context API y estado global
├─ pages/ # Vistas principales (Home, CharacterDetail)
├─ assets/ # Imágenes y logos
├─ test/ # Tests unitarios
