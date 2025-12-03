/**
 * @fileoverview Component for the main application header.
 * @module Header
 */
import Nav from "./Nav";

/**
 * The `Header` component displays the main site title and the primary navigation menu.
 *
 * It renders a responsive header bar styled with a background and shadow.
 * The header contains the main site title, currently set to **"Películas"**
 * (Movies), and includes the **`<Nav />`** component for navigation links.
 *
 * This component typically sits at the top of the main application layout.
 *
 * @component
 * @alias Header
 * @returns {JSX.Element} A styled HTML `header` element containing the site
 * title and the navigation menu.
 */

function Header() {

  return (
    <header className="bg-white shadow mb-6">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">Películas</h1>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
