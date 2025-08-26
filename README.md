# 🦸 Marvel Characters

## 📌 Introducción

Esta prueba consiste en la creación de una pequeña aplicación para obtener información sobre diferentes personajes de Marvel.  
La aplicación cuenta con dos vistas principales: listado de personajes y detalle de cada personaje.

---

## 🖥️ Vistas

### 1️⃣ Vista Principal

- Muestra un listado de 50 personajes o los resultados filtrados por el buscador.
- Icono superior de favoritos que muestra los personajes favoritos.
- Barra de búsqueda en tiempo real.
- Contador con los resultados obtenidos.
- Cada resultado muestra:
  - Imagen del personaje
  - Nombre
  - Opción para añadir/eliminar favoritos
- Al hacer clic en un personaje, se redirige a la vista de detalle.

### 2️⃣ Vista Detalle de Personaje

- Imagen, nombre y descripción del personaje.
- Icono para añadir/eliminar de favoritos.
- Listado de cómics en los que aparece (máx. 20), ordenados por fecha de salida.
- Iconos de navegación a la página principal o lista de favoritos.

---

## 🎨 Diseño

- Responsive: móvil y escritorio.
- Basado en los diseños de Figma.
- Uso de Styled Components y variables CSS para consistencia visual.

---

## ⚙️ Stack Tecnológico

- **TypeScript**
- **React ≥ 17**
- **Node ≥ 18**
- **Vite**
- **Styled Components**
- **Context API** para gestión de estado
- **Axios** para llamadas a la API Marvel
- **Vitest + React Testing Library** para tests

---

## 🛠️ Funcionalidades

- Listado y filtrado de personajes
- Favoritos persistentes entre vistas
- Vista de detalle de personaje con cómics
- Responsive y accesible
- Uso de mocks cuando la API no está disponible
- Linters y formatters configurados (ESLint + Prettier)
- Husky para pre-commits con convenciones:
  - `feat` – nueva funcionalidad
  - `fix` – corrección de errores
  - `chore` – tareas de mantenimiento o configuración
  - `refactor` – refactorización de código sin cambios funcionales

---

## 🚀 Instalación y Ejecución

### 1️⃣ Clonar repositorio

```bash
git clone <URL-del-repositorio>
cd <nombre-del-proyecto>
```

2️⃣ Instalar dependencias
npm install

3️⃣ Configurar variables de entorno

Crear un archivo .env en la raíz del proyecto con los valores:

MARVEL_BASE_URL=https://gateway.marvel.com/v1/public/characters
MARVEL_PUBLIC_KEY=<tu-public-key>

Nota: aunque la API de Marvel no esté activa, la aplicación funciona con datos mock.

4️⃣ Ejecutar en modo desarrollo
npm run dev

Sirve la aplicación en http://localhost:5173/.

Assets sin minimizar para facilitar debugging.

5️⃣ Ejecutar build para producción
npm run build

Genera la versión optimizada en dist/.

Assets concatenados y minimizados.

6️⃣ Ejecutar la aplicación en modo producción
npm run preview

Sirve el contenido de dist/ como en un servidor real.

🧹 Convenciones de Commits (Husky)

Se usan hooks pre-commit para validar mensajes de commit:

feat: nueva funcionalidad

fix: corrección de errores

chore: tareas de mantenimiento o configuración

refactor: refactorización de código sin cambios funcionales

Ejemplo de commit válido:

git commit -m "feat: agregar barra de búsqueda de personajes"

✅ Testing

Ejecutar todos los tests:

npm run test

Cobertura incluida.

Se usan mocks para llamadas a la API cuando esta no responde.

📂 **Estructura del Proyecto**

- `src/`
  - `api/` 🗂️ Services API (Marvel)
  - `components/` 🧩 Reusable components
  - `hooks/` 🔗 Custom hooks
  - `store/` 🏛️ Context API and global state
  - `pages/` 🖼️ Main views (Home, CharacterDetail)
  - `assets/` 🖼️ Images and logos
  - `test/` ✅ Unit tests
