import React, { useRef } from "react";
import { NavLink} from "react-router-dom";
import { Container, Row } from "reactstrap";
import "./header.css";

const nav__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/contactus",
    display: "Contact us",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header className="header sticky__header ">
      <Container>
        <Row>
          <div className="nav_wrapper d-flex  align-items-center justify-content-between">
            {/* logo */}
            <div className="logos">
              <h3>UniFinder</h3>
            </div>
            {/* logo end */}

            {/* menu start */}
            <div>
              <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                <ul className="menu d-flex list-unstyled align-items-center gap-5 text-decoration-none">
                  {nav__links.map((item, index) => (
                    <li className="nav__item" key={index}>
                      <NavLink
                        className={(navClass) =>
                          navClass.isActive ? "active__link" : ""
                        }
                        to={item.path}
                      >
                        {item.display}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="d-flex align-items-center">
                <span className="mobile__menu" onClick={toggleMenu}>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
            {/* menu end */}
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
