/**
 * @fileoverview The root component and entry point of the application.
 * @module App
 */
import Header from "./components/Header";
import Router from "./components/Router";

/**
 * The `App` component serves as the **root entry point** for the entire application.
 *
 * It establishes the fundamental application structure by rendering:
 * 1.  The main application header (`<Header />`).
 * 2.  The complete routing structure (`<Router />`, which typically contains
 * the `<Routes>` and page components).
 *
 * This component is usually mounted directly into the root DOM element (e.g., `#root`).
 *
 * @component
 * @alias App
 * @returns {JSX.Element} The root application layout, comprising the header and
 * the configured routing structure.
 */

function App() {
  return (
    <>
      <Header />
      <Router />
    </>
  );
}

export default App;
