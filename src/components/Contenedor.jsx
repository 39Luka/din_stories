/**
 * @fileoverview Main layout container component.
 * @module Contenedor
 */

import { Outlet } from "react-router-dom";

/**
 * The `Contenedor` component serves as the **main application layout wrapper**.
 *
 * It provides a **centered, responsive design** that covers at least the full
 * viewport height (`min-h-screen`) and applies a **background gradient**.
 *
 * This component renders the nested route content using React Router's
 * **`<Outlet />`**.
 *
 * It includes **accessibility (ARIA)** attributes, defining the main content
 * role (`role="main"`) and allowing the main content area to be focused
 * (`tabIndex="-1"`).
 *
 * @component
 * @alias Contenedor
 * @param {object} props - Component properties.
 * @param {string} [props.titulo] - Optional title to display at the top of the
 * section. If provided, it is rendered within an `<h1>` element.
 *
 * @returns {JSX.Element} A styled `main` element (`<main>`) containing the
 * title (if provided) and the nested route content.
 */

function Contenedor({ titulo }) {
  return (
    <main
      id="main-content"
      role="main"
      tabIndex="-1"
      className="min-h-screen bg-linear-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center p-8"
    >
      <section
        aria-labelledby="main-section-title"
        className="w-full max-w-7xl text-center"
      >
        {titulo && (
          <h1
            id="main-section-title"
            className="font-heading-h1 leading-(--heading-h1-line-height) text-(--colorprimary) [text-shadow:0px_4px_4px_#00000040]"
          >
            {titulo}
          </h1>
        )}

        <Outlet />
      </section>
    </main>
  );
}

export default Contenedor;
