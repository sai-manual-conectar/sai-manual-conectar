import { Link } from "react-scroll";
import NextLink from "next/link";
import Collapse from "react-bootstrap/Collapse";
import { Button } from "react-bootstrap";
import { useState } from "react";
const Navbar = ({ menu = true }) => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar navbar-dark bg-white">
      <div className="container">
      <NextLink href="https://www.cear.es" target="_blank" className="navbar-brand " >
            <img className="navbar-img" src="images/logo-cear.jpg" alt="CEAR" />
        </NextLink>
        <NextLink href="/" className="navbar-brand text-black">ESPACIO CONECTA(R) <br></br>
            <small>Manual de español oral</small>
        </NextLink>
        {menu &&
          <Button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle navigation"
            variant="link"
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
        }
        <Collapse
          in={open}
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="jobs"
                spy={true}
                smooth={true}
                onClick={() => setOpen(!open)}
              >
               Mi perfil
              </Link>
            </li>
        
          </ul>
        </Collapse>
      </div>
    </nav>
  );
};
export default Navbar;
