import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import tk1 from "../../assets/TK_Table_logo1.png";
import tk2 from "../../assets/tklogo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./NavBar.css";
function Nav1() {
  const { pathname } = useLocation();

  console.log(pathname, "ff");
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbar_bg_set bg-body-tertiary p-0"
    >
      <Container fluid className="p-0">
        <Navbar.Brand href="#home">
          <div className="svg-container">
            <Link
              to="/"
              alt="home-page"
              aria-label="The Kitchen logo"
              role="link"
            >
              <img
                src={tk1}
                // style={{ width: "3.47vw", height: "3.7vw" }}
                alt="The Kitchen logo"
                aria-label="The Kitchen logo"
                role="img"
              />
            </Link>
          </div>
        </Navbar.Brand>
        <Navbar.Brand href="/">
          <Link to="/">
            <img src={tk2} alt="" className="logo2" style={{}} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="mx-auto"></Nav>
          <Nav className="d-sm-flex justify-content-sm-center me-md-5 me-0 ">
            <div
              className={` d-md-none hover_div ${pathname === "/" && "active"}`}
            >
              <NavLink to="/" className="navlink text_nav">
                Home
              </NavLink>
            </div>

            <div className={`hover_div ${pathname === "/work" && "active"}`}>
              <NavLink to="/work" className="navlink text_nav">
                Work
              </NavLink>
            </div>
            <div className={`hover_div ${pathname === "/about" && "active"}`}>
              <NavLink to="/about" className="navlink text_nav">
                About
              </NavLink>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav1;
