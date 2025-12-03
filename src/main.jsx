/**
 * @fileoverview Main entry point of the React application.
 * @module main
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import './assets/styles/index.css'

/**
 * Initializes and mounts the React application into the DOM.
 *
 * 1.  **Root Rendering:** Uses `createRoot` to render the application into the
 * DOM element with the ID `root`.
 * 2.  **Strict Mode:** Wraps the entire application with `<StrictMode>` to enable
 * development-only checks for potential issues.
 * 3.  **Routing Setup:** Wraps the `<App />` component with `<BrowserRouter>`
 * to enable client-side routing based on the URL.
 * 4.  **Accessibility:** Includes a **visually hidden "Skip to main content" link**
 * (using the `sr-only` utility class) that becomes visible on focus,
 * allowing keyboard users to bypass repetitive navigation elements.
 *
 * @function
 * @returns {void}
 */

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      {/* Accessible skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-700 text-white px-4 py-2 rounded z-50"
      >
        Saltar al contenido principal
      </a>
      
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </>
  </StrictMode>,
)
