import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import tk1 from "../../assets/TK_Table_logo1.png";
import tk2 from "../../assets/tklogo.png";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
function NavBar() {
  return (
    <Navbar expand="lg" className="nav_bg">
      <Container fluid className="p-0 m-0">
        <Navbar.Brand href="#">
          <div class="svg-container">
            <a
              href="/"
              alt="home-page"
              aria-label="The Kitchen logo"
              role="link"
            >
              <img
                src={tk1}
                style={{ width: "3.47vw", height: "3.7vw" }}
                alt="The Kitchen logo"
                aria-label="The Kitchen logo"
                role="img"
              />
            </a>
          </div>
        </Navbar.Brand>
        <Navbar.Brand href="/node_modules">
          <img src={tk2} alt="" style={{ width: "11.11vw", height: "4.3vw" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            // style={{ maxHeight: "100px" }}
            navbarScroll
          >
            
          </Nav>
          <div className="d-flex">
            <NavLink
              className="nav_link_design"
              exact
              to="/work"
              activeClassName="active"
            >
              Work
            </NavLink>

            <NavLink
              className="nav_link_design"
              exact
              to="/about"
              activeClassName="active"
            >
              About
            </NavLink>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
