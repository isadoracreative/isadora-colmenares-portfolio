import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import HeaderNavLink from './components/HeaderNavLink'; // Import the new component

function App() {
  return (
    <div className="App container-fluid px-0">
      <nav class="navbar navbar-expand-md fixed-top bg-white border-bottom border-secondary-subtle py-0">
        <div class="container-fluid ps-16 pe-12">
          <a class="navbar-brand" href="#">Isadora Colmenares</a>
          <button class="navbar-toggler border-0 p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span><i className="fa-sharp-duotone fa-regular fa-bars"></i></span>
          </button>
          <div class="offcanvas offcanvas-end mt-48 w-auto align-items-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-body d-flex align-items-start px-0">
              <ul class="navbar-nav px-0">
                <HeaderNavLink href="#" active>Portfolio</HeaderNavLink>
                <HeaderNavLink href="#">About</HeaderNavLink>
                <HeaderNavLink href="#">Contact</HeaderNavLink>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="container mt-96">
        <h1 className="mt-4">Heading H1</h1>
      </div>
    </div>
  );
}

export default App;
