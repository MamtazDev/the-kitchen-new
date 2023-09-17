// import React from "react";
// import './NavBar.css'
// const Nav1 = () => {
//   return (
//     <div>
//       <div className="cls_headerWrapper">
//         <div className="cls_headerWrap">
//           <div className="svg-container">
//             <a
//               href="/"
//               alt="home-page"
//               aria-label="The Kitchen logo"
//               role="link"
//             >
//               <img
//                 src="//d2ozwg77fjfk77.cloudfront.net/636/studio/assets/v1668768093126_225532065/TK_Table_Logo_2022.svg"
//                 style={{ width: "3.47vw", height: "3.7vw" }}
//                 alt="The Kitchen logo"
//                 aria-label="The Kitchen logo"
//                 role="img"
//               />
//             </a>
//           </div>
//           <div className="cls_headerLogoImg">
//             <a
//               className="cls_headerLogo disableLogoClick"
//               aria-label="kitchen Logo"
//               href="/"
//             >
//               <picture>
//                 <img
//                   src="//d2ozwg77fjfk77.cloudfront.net/636/studio/assets/v1668767979296_1695045592/TK_Logo_2022_DarkGreen.svg"
//                   alt="kitchen logo"
//                 />
//               </picture>
//             </a>
//           </div>
//           <div className="cls_menuContainer">
//             <div className="cls_menuCont cls_menuCont1">
//               <a
//                 className="cls_brandMenu cls_brandMenu_chisiamo"
//                 aria-label="Chi siamo"
//                 href="/work"
//               >
//                 work
//               </a>
//             </div>
//             <div className="cls_menuCont cls_menuCont2">
//               <a
//                 className="cls_brandMenu cls_brandMenu_inostriprodotti"
//                 aria-label="I nostri prodotti"
//                 href="/about"
//               >
//                 about
//               </a>
//             </div>
//           </div>
//         </div>
//         {/* mobile */}
//         <div className="cls_headerWrapMob d-none">
//           <div className="mob-logo">
//             <div className="svg-container">
//               <a
//                 href="/"
//                 alt="home-page"
//                 aria-label="The Kitchen logo"
//                 role="link"
//               >
//                 <img
//                   src="//d2ozwg77fjfk77.cloudfront.net/636/studio/assets/v1668768093126_225532065/TK_Table_Logo_2022.svg"
//                   style={{ width: "50px", height: "42px" }}
//                   alt="The Kitchen logo"
//                   aria-label="The Kitchen logo"
//                   role="img"
//                 />
//               </a>
//             </div>
//             <div className="cls_headerLogoImg">
//               <a
//                 className="cls_headerLogo disableLogoClick"
//                 aria-label="kitchen Logo"
//                 href="/"
//               >
//                 <picture>
//                   <img
//                     src="//d2ozwg77fjfk77.cloudfront.net/636/studio/assets/v1668767979296_1695045592/TK_Logo_2022_DarkGreen.svg"
//                     alt="kitchen logo"
//                   />
//                 </picture>
//               </a>
//             </div>
//           </div>
//           <div className="cls_menucon" aria-label="Menu" role="button">
//             <div className="cls_panCakeOpen">
//               <span className="cls_icon-bar1"></span>
//               <span className="cls_icon-bar2"></span>
//               <span className="cls_icon-bar3"></span>
//             </div>
//             <div className="cls_pancakeClose">X</div>
//           </div>
//           <div className="cls_pancakewrapper cls_closed">
//             <div className="cls_menuContainer">
//               <div
//                 className="cls_menuCont cls_menuCont3"
//                 style={{ background: "rgb(255, 159, 252)" }}
//               >
//                 <a
//                   className="cls_brandMenu homemenu active"
//                   href="/"
//                   aria-label="home"
//                   target="_self"
//                 >
//                   home
//                 </a>
//               </div>
//               <div className="cls_menuCont cls_menuCont1">
//                 <a
//                   className="cls_brandMenu cls_brandMenu_chisiamo"
//                   href="/work"
//                   aria-label="work"
//                   target="_self"
//                 >
//                   work
//                 </a>
//               </div>
//               <div className="cls_menuCont cls_menuCont2">
//                 <a
//                   className="cls_brandMenu cls_brandMenu_inostriprodotti"
//                   href="/about"
//                   aria-label="about"
//                   target="_self"
//                 >
//                   about
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Nav1;
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import tk1 from "../../assets/TK_Table_logo1.png";
import tk2 from "../../assets/tklogo.png";
import { NavLink } from "react-router-dom";
function Nav1() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbar_bg_set bg-body-tertiary p-0"
    >
      <Container fluid className="p-0">
        <Navbar.Brand href="#home">
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
        <Navbar.Brand href="/">
          <img src={tk2} alt="" className="logo2" style={{}} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="mx-auto"></Nav>
          <Nav className="d-sm-flex justify-content-sm-center">
            <div className="hover_div">
              <NavLink to="/" className="navlink home_class d-none">
                Home
              </NavLink>
            </div>
            <div className="hover_div">
              <NavLink to="/work" className="navlink">
                Work
              </NavLink>
            </div>
            <div className="hover_div about_mr">
              <NavLink eventKey={2} to="/about" className="navlink ">
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
