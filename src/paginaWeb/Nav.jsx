import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Nav() {
  return (
    <nav className="navbar navbar-light bg-light">
        <div>
          <Link className="nav-link d-inline" to="/">
            <i className="bi bi-house-door-fill"></i> Inicio
          </Link>
          <Link className="nav-link d-inline" to="/servicios">
            <i className="bi bi-tools"></i> Servicios
          </Link>
          <Link className="nav-link d-inline" to="/about">
            <i className="bi bi-person-circle"></i> Contacto
          </Link>
        </div>
    </nav>
  );
}

export default Nav;
