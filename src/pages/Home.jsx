/**
 * @fileoverview Component for the main Home (landing) page.
 * @module Home
 */

/**
 * The `Home` page component serves as the **main entry point** or landing page
 * for the application.
 *
 * It currently displays a generic **welcome message** and basic introductory
 * content. In typical applications, this page would contain featured content,
 * latest updates, or key navigation links.
 *
 * This component is designed to be rendered directly as a route element
 * within the main application router (usually at the path `/`).
 *
 * @page
 * @component
 * @alias Home
 * @returns {JSX.Element} The Home page content, featuring a main title and
 * a welcome paragraph.
 */

function Home() {
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Bienvenido</h2>
      <p>Esta es la página principal de la aplicación.</p>
    </>
  );
}

export default Home;
