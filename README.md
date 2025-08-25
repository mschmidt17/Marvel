# 🦸 Frontend Developer Challenge - Marvel Characters

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
- **Jest + React Testing Library** para tests

---

## 🛠️ Funcionalidades

- Listado y filtrado de personajes
- Favoritos persistentes entre vistas
- Vista de detalle de personaje con cómics
- Responsive y accesible
- Uso de mocks cuando la API no está disponible
- Linters y formatters configurados (ESLint + Prettier)
- Husky para pre-commits con convenciones:
  - `feat`
  - `fix`
  - `chore`
  - `refactor`

---

## 📂 Estructura del Proyecto

```text
src/
├─ api/          # Servicios API (Marvel)
├─ components/   # Componentes reutilizables
├─ hooks/        # Hooks personalizados
├─ store/        # Context API y estado global
├─ pages/        # Vistas principales (Home, CharacterDetail)
├─ assets/       # Imágenes y logos
├─ test/         # Tests unitarios
```
