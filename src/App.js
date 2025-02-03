import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import HeaderNavLink from './components/HeaderNavLink'; // Import the new component

function App() {
  return (
    <div className="App container-fluid px-0 d-flex flex-column min-vh-100">
      <nav class="navbar navbar-expand-md fixed-top bg-white border-bottom border-secondary-subtle py-0">
        <div class="container-fluid ps-16 pe-12 ps-sm-24 ps-lg-36 pe-lg-24 ps-xl-48 pe-xl-36">
          <a class="navbar-brand" href="#">Isadora Colmenares</a>
          <button class="navbar-toggler border-0 p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span><i className="fa-sharp-duotone fa-regular fa-bars"></i></span>
          </button>
          <div class="offcanvas offcanvas-end mt-48 mt-md-0 w-auto align-items-start align-items-md-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
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
      <main className="container mt-96 flex-grow-1">
        <h1 className="mt-4">Heading H1</h1>
      </main>
      <footer className="text-start mt-auto px-16 px-sm-36 py-48">
        <div className="container-fluid d-flex flex-column gap-24 flex-md-row justify-content-between p-0">
          <ul className="list-unstyled d-flex flex-column flex-md-row gap-12 gap-md-24 m-0">
            <li><a href="#" className="text-decoration-underline">Portfolio</a></li>
            <li><a href="#" className="text-decoration-underline">About</a></li>
            <li><a href="#" className="text-decoration-underline">Contact</a></li>
          </ul>
          <p className="m-0">© 2025 Isadora Colmenares. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
