/**
 * @fileoverview Component for the Interpreters (Actors) listing page.
 * @module Interpretes
 */
import { Link } from "react-router-dom";
import peliculas from "../data/peliculas";
import List from "../components/List";

/**
 * The `Interpretes` page component displays a comprehensive list of all
 * **unique actors (interpreters)** sourced from the available movie data (`peliculas`).
 *
 * Each actor is rendered as an interactive card using the **`<List />`** component,
 * which is wrapped in a **`<Link>`** to navigate to the specific actor's detail page.
 *
 * **Key Features:**
 * * **Data Source:** Iterates over the actors nested within the `peliculas` array.
 * * **Highlighting:** Actors from movies with a perfect score (`nota === 10`)
 * are highlighted visually through the `esNota10` prop passed to `<List />`.
 * * **Routing:** The link uses dynamic parameters (`idPeli`, `idInterprete`)
 * to route to `/detalle/pelicula/:idPeli/interprete/:idInterprete`.
 *
 * This component is intended to be used as a route element within the
 * application router (usually at the path `/interpretes`).
 *
 * @page
 * @component
 * @alias Interpretes
 * @returns {JSX.Element} The Interpreters page content, consisting of a title,
 * descriptive text, and a grid of navigable actor cards.
 */

function Interpretes() {
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Listado de intérpretes</h2>
      <p className="text-gray-700 mb-6">
        Estos son los intérpretes disponibles de nuestras películas:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-8">
        {peliculas.map((pelicula) =>
          pelicula.actores.map((actor, idInterprete) => (
            <Link
              key={`${pelicula.id}-${idInterprete}`}
              to={`/detalle/pelicula/${pelicula.id}/interprete/${idInterprete}`}
              aria-label={`Ver detalles del intérprete ${actor.nombre}`}
            >
              <List
                nombre={actor.nombre}
                foto={actor.imagen}
                esNota10={pelicula.nota === 10}
              >
                {actor.biografia}
              </List>
            </Link>
          ))
        )}
      </div>
    </>
  );
}

export default Interpretes;
