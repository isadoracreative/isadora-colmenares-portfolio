import React from 'react';

function App() {
  return (
    <div className="App container-fluid px-0">
      <nav className="navbar navbar-expand-lg pl-4 pr-3">
        <a className="navbar-brand text-dark" href="#">Isadora Colmenares</a>
        <button className="navbar-toggler border-0 p" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span><i class="fa-sharp-duotone fa-regular fa-bars"></i></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <h1 className="mt-4">Welcome to My Portfolio</h1>
    </div>
  );
}

export default App;
