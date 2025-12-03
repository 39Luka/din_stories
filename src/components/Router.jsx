/**
 * @fileoverview Configuration component for the main application routing structure.
 * @module AppRouter
 */
import { Routes, Route, Navigate } from "react-router-dom";

import Contenedor from "./Contenedor";
import Detail from "./Detail";

import Home from "../pages/Home";
import Peliculas from "../pages/Peliculas";
import Interpretes from "../pages/Interpretes";
import Admin from "../pages/Admin";

/**
 * The `AppRouter` component defines the entire routing structure of the application
 * using **React Router v6**.
 *
 * It establishes a base layout by wrapping most main pages within the
 * **`<Contenedor />`** component.
 *
 * **Defined Routes & Functionality:**
 *
 * * **Main Routes (with Layout):**
 * * `/`: Displays the `<Home />` page.
 * * `/peliculas`: Displays the `<Peliculas />` page.
 * * `/interpretes`: Displays the `<Interpretes />` page.
 * * `/admin`: Displays the `<Admin />` page.
 *
 * * **Redirects:**
 * * `/inicio` automatically redirects to `/` using `<Navigate to="/" />`.
 *
 * * **Dynamic Detail Routes:**
 * * `/detalle/pelicula/:idPeli`: Movie detail view.
 * * `/detalle/pelicula/:idPeli/interprete/:idInterprete`: Specific actor detail view.
 *
 * * **404 Fallback:**
 * * The `path="*"` route captures all undefined paths, displaying a
 * "Page not found" message within the `<Contenedor />` layout.
 *
 * @component
 * @alias AppRouter
 * @returns {JSX.Element} The full routing structure encapsulated in `<Routes>`.
 */

function AppRouter() {
  return (
    <Routes>
      {/* Main layout */}
      <Route element={<Contenedor />}>
        <Route path="/" element={<Home />} />
        <Route path="/inicio" element={<Navigate to="/" />} />
        <Route path="/peliculas" element={<Peliculas />} />
        <Route path="/interpretes" element={<Interpretes />} />
        <Route path="/admin" element={<Admin />} />

        {/* Dynamic detail routes */}
        <Route
          path="/detalle/pelicula/:idPeli"
          element={<Detail es="pelicula" />}
        />
        <Route
          path="/detalle/pelicula/:idPeli/interprete/:idInterprete"
          element={<Detail es="interprete" />}
        />
      </Route>

      {/* 404 Page */}
      <Route
        path="*"
        element={
          <Contenedor titulo="Página no encontrada">
            <p>La ruta no existe.</p>
          </Contenedor>
        }
      />
    </Routes>
  );
}

export default AppRouter;
