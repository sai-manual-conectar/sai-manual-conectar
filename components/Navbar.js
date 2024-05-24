import NextLink from "next/link";
import Collapse from "react-bootstrap/Collapse";
import { Button } from "react-bootstrap";
import { useState } from "react";
const Navbar = ({ menu = true }) => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar navbar-dark bg-white">
      <div className="d-flex w-100 justify-content-around">
        <NextLink href="https://www.cear.es" target="_blank" className="navbar-brand ">
          <img className="navbar-img " src="images/logo-cear.jpg" alt="CEAR" />
        </NextLink>
        <NextLink href="" className="navbar-brand text-black">ESPACIO CONECTA(R) <br></br>
          <small>Manual de español oral</small>
        </NextLink>
        {menu &&
          <Button
            id="burger-menu"
            className="navbar-toggle btn-secondary"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle navigation"

          >
            <span className="navbar-toggler-ico"><i className="fa fa-bars fa-2x "></i></span>
          </Button>
        }
       
        <Collapse
          in={open}
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NextLink
                className="nav-link text-black"
                href="/login"
              >
                Iniciar Sesión
              </NextLink>
            </li>
            <li className="nav-item">
              <NextLink
                className="nav-link text-black"
                href="/crear-cuenta"
              >
                Crear Cuenta
              </NextLink>
            </li>
            <li className="nav-item">
              <NextLink
                className="nav-link text-black"
                href="/actividad"
              >
                Actividades
              </NextLink>
            </li>

          </ul>
        </Collapse>
      </div>
    </nav>
  );
};
export default Navbar;
