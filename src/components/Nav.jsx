/**
 * @fileoverview Responsive navigation component with mobile collapse/expand functionality.
 * @module Nav
 */
import { useState } from "react";
import { NavLink } from "react-router-dom";

/**
 * The `Nav` component renders the main application navigation menu.
 *
 * It implements a **responsive design pattern**:
 * - **Desktop:** The menu links are always visible.
 * - **Mobile:** The links are collapsed and hidden by default, accessible via
 * an **accessible hamburger button** (utilizing the `useState` hook for toggling).
 *
 * It uses **React Router's `<NavLink>`** for navigation, automatically applying
 * the `isActive` state to highlight the current route (e.g., using `font-bold underline`).
 *
 * **Accessibility (ARIA) Features:**
 * The component includes robust accessibility features on the toggle button,
 * such as `aria-expanded`, `aria-controls="menu-principal"`, and keyboard
 * interaction support.
 *
 * **Internal State:**
 * Uses the `open` state (`boolean`) to control the visibility and transition
 * of the navigation links.
 *
 * @component
 * @alias Nav
 * @returns {JSX.Element} A fragment containing the toggle button (on mobile) and
 * the responsive navigation bar with links to the application's main routes
 * (`/`, `/peliculas`, `/interpretes`, `/admin`).
 */

function Nav() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* Accessible hamburger button */}
      <button
        className="md:hidden border rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
        aria-label="Abrir menú"
        aria-expanded={open}
        aria-controls="menu-principal"
        onClick={toggleMenu}
      >
        ☰
      </button>

      {/* Navigation */}
      <nav
        id="menu-principal"
        className={`
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} 
          md:max-h-none md:opacity-100 
          overflow-hidden transition-all duration-300 ease-in-out
          md:flex md:gap-6 text-lg 
          absolute md:static left-0 right-0 top-16 md:top-auto 
          bg-white shadow md:shadow-none 
          p-6 md:p-0
        `}
        aria-label="Navegación principal"
      >
        <NavLink
          to="/"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive
              ? "font-bold underline block mb-4 md:mb-0"
              : "hover:underline block mb-4 md:mb-0"
          }
        >
          Inicio
        </NavLink>

        <NavLink
          to="/peliculas"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive
              ? "font-bold underline block mb-4 md:mb-0"
              : "hover:underline block mb-4 md:mb-0"
          }
        >
          Películas
        </NavLink>

        <NavLink
          to="/interpretes"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive
              ? "font-bold underline block mb-4 md:mb-0"
              : "hover:underline block mb-4 md:mb-0"
          }
        >
          Intérpretes
        </NavLink>

        <NavLink
          to="/admin"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive
              ? "font-bold underline block"
              : "hover:underline block"
          }
        >
          Admin
        </NavLink>
      </nav>
    </>
  );
}

export default Nav;
