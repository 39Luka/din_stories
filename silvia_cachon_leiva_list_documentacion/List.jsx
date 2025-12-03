/**
 * @fileoverview Reusable component for displaying an item card (e.g., an actor or character).
 * @module List
 */

/**
 * The `List` component renders a display card for an entity, typically an actor,
 * featuring an image, a title, and a descriptive text (passed as children).
 *
 * The card is designed to be **interactive and focusable** (`tabIndex="0"`)
 * and includes advanced **accessibility (ARIA)** features for screen readers,
 * particularly for highlighting special items.
 *
 * **Special Feature:**
 * The `esNota10` flag controls a visual highlight (text color) and adds an
 * accessible note to the `aria-label` when the item is associated with a top-rated
 * entity (e.g., an actor in a perfect-score movie).
 *
 * @component
 * @alias List
 *
 * @param {object} props - Component properties.
 * @param {string} props.foto - The URL of the image/photo to display for the item.
 * @param {string} props.nombre - The main name/title to be displayed (e.g., Actor's name).
 * @param {boolean} [props.esNota10=false] - If true, applies a visual highlight and
 * updates the ARIA label to indicate the item belongs to a top-rated entity.
 * @param {React.ReactNode} props.children - The descriptive content or biography
 * to be displayed below the title. Also added as a visually hidden caption
 * (`sr-only`) for accessibility.
 *
 * @returns {JSX.Element} A styled, focusable `<article>` card with image, title, and description.
 */

function List(props) {
    const { foto, nombre, esNota10 } = props;
    return (
        <article
            tabIndex="0"
            className="flex flex-col items-start gap-3 p-4 rounded-lg bg-[linear-gradient(0deg,rgba(247,247,247,1)_0%,rgba(247,247,247,1)_100%)] shadow-md hover:shadow-lg transition-shadow duration-300"
            aria-label={`${nombre}${esNota10 ? ', intérprete en película destacada' : ''}`}
        >
            <figure className="w-full aspect-square rounded-lg bg-gray-100 overflow-hidden">
                <img
                    src={foto}
                    alt={`Foto de ${nombre}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                />
                <figcaption className="sr-only">{props.children}</figcaption>
            </figure>

            <header>
                <h2
                    className={`text-(--heading-h5-font-size) font-(--heading-h5-font-weight) leading-(--heading-h5-line-height) ${
                        esNota10 ? "text-red-600" : "text-gray-800"
                    }`}
                >
                    <strong>{nombre}</strong>
                    {esNota10 && <em> – Intérprete en película destacada</em>}
                </h2>
            </header>

            <p className="text-(--body-text-font-size) leading-(--body-text-line-height)">
                {props.children}
            </p>
        </article>
    );
}

export default List;
