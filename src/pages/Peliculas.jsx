/**
 * @fileoverview Component for the Movies listing page.
 * @module Peliculas
 */
import { Link } from "react-router-dom";
import peliculas from "../data/peliculas";
import List from "../components/List";

/**
 * The `Peliculas` page component displays a complete list of all **available movies**
 * sourced from the application's data (`peliculas`).
 *
 * Each movie is rendered as an interactive card using the **`<List />`** component.
 *
 * **Key Functionality:**
 * * **Data Display:** The movie title (`nombre`) is used as the card title, the
 * movie poster (`cartelera`) as the image, and the **classification**
 * (`clasificacion`) is passed as the descriptive content (`props.children`).
 * * **Routing:** Each card is wrapped in a **`<Link>`** component to enable navigation
 * to the detailed view using the dynamic route: `/detalle/pelicula/:idPeli`.
 *
 * This component is intended to be used as a route element within the
 * application router (usually at the path `/peliculas`).
 *
 * @page
 * @component
 * @alias Peliculas
 * @returns {JSX.Element} The Movies page content, featuring a title, descriptive
 * text, and a responsive grid of navigable movie cards.
 */

function Peliculas() {
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Listado de películas</h2>
      <p className="text-gray-700 mb-6">
        Estas son los películas disponibles:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-8">
        {peliculas.map((pelicula) => (
          <Link key={pelicula.id} to={`/detalle/pelicula/${pelicula.id}`}>
            <List
              nombre={pelicula.nombre}
              foto={pelicula.cartelera}
            >
              {pelicula.clasificacion}
            </List>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Peliculas;
