/**
 * @fileoverview Component for the Administration page.
 * @module Admin
 */

/**
 * The `Admin` page component represents the dedicated administration section
 * of the application.
 *
 * It currently serves as a **placeholder** displaying simple content. In future
 * iterations, this page is intended to house administrative tools, data management,
 * user controls, or other backend-related functionalities.
 *
 * This component is designed to be rendered directly as a route element
 * within the main application router.
 *
 * @page
 * @component
 * @alias Admin
 * @returns {JSX.Element} The Administration page content, currently featuring
 * a title and placeholder text.
 */

function Admin() {
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Panel de Administración</h2>
      <p>Aquí irían las herramientas de administración.</p>
    </>
  );
}

export default Admin;
