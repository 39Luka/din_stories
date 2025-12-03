# 📦 Componente `List` (Tarjeta de Ítem)

Este componente reutilizable está diseñado para mostrar una tarjeta de presentación para cualquier entidad (típicamente un actor o personaje), incluyendo su imagen, título principal y un texto descriptivo.

---

## 📌 Resumen

El componente `List` renderiza una tarjeta de visualización interactiva y enfocable, ideal para ser utilizada en listados o cuadrículas. Prioriza la **accesibilidad (ARIA)** y permite destacar ítems especiales mediante una *flag*.

| Propiedad | Tipo | Descripción |
| :--- | :--- | :--- |
| **`foto`** | `string` | URL de la imagen/foto a mostrar en la tarjeta. |
| **`nombre`** | `string` | Nombre principal o título a mostrar en el encabezado. |
| **`esNota10`** | `boolean` | **(Opcional)** Si es `true`, aplica un resaltado visual (color de texto) y una nota de accesibilidad (`aria-label`) para indicar que el ítem pertenece a una entidad destacada (ej. película con nota 10). Por defecto es `false`. |
| **`children`** | `React.ReactNode` | El contenido descriptivo o biografía que se muestra debajo del título. También se añade como un *caption* oculto (`sr-only`) para lectores de pantalla. |

---

## ✨ Características Principales

* **Estructura:** Renderiza un elemento `<article>` estilizado.
* **Interactividad y Accesibilidad:**
    * Diseñado para ser **enfocable** (`tabIndex="0"`), permitiendo la interacción con teclado, útil cuando la tarjeta es un enlace.
    * Incluye un `aria-label` dinámico que se actualiza si `esNota10` es `true`.
    * El texto descriptivo (`children`) se añade como una etiqueta `<figcaption>` oculta (`sr-only`) para mejorar el contexto de la imagen para los lectores de pantalla.
* **Resaltado Condicional (`esNota10`):**
    * Si se establece en `true`, el título (`nombre`) cambia de color (rojo) y se añade un texto adicional visible: *"– Intérprete en película destacada"*.

## 📄 Uso del Componente

Este componente se utiliza para iterar sobre una lista de datos (como actores o películas).

### Ejemplo Básico

\`\`\`jsx
import List from './List';

function MiListado() {
  const actorEjemplo = {
    id: 1,
    nombre: "Ana García",
    biografia: "Conocida por su papel en 'El Viaje'.",
    imagen: "/img/ana_garcia.jpg",
    peliculaNota: 7 
  };
  
  return (
    <List 
      foto={actorEjemplo.imagen} 
      nombre={actorEjemplo.nombre} 
      esNota10={actorEjemplo.peliculaNota === 10} // Será false
    >
      {actorEjemplo.biografia}
    </List>
  );
}
\`\`\`