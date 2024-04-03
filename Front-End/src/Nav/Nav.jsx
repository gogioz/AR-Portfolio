import logo from "../../imgs/logo-dark.png";
import { NavLink } from "react-router-dom";
import "./nav.css";
import { useState } from "react";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const ActiveLink = ({ isActive }) => {
    return { borderBottom: isActive ? "1px solid black" : "" };
  };

  const handleNavLinks = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="p-2  top-0 left-0  right-0 sticky md:pt-3 bg-white opacity-95  4xl:px-6 4xl:py-3  ">
        <div className="flex items-center justify-between ">
          <img
            src={logo}
            alt=""
            className="xs:w-[60%] sm:w-[50%] md:w-[35%] lg:w-[20%] 3xl:w-[12%] xl:w-[15%] "
          />
          <div className="hidden xl:flex  space-x-8">
            <ul className="flex space-x-5 xl:text-[24px] xl:font-normal">
              <li>
                <NavLink
                  className="nav-link-home nav-link  pb-1"
                  style={ActiveLink}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link nav-link-highlight  pb-1"
                  style={ActiveLink}
                  to="/highlights"
                >
                  Highlights
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link nav-link-about pb-1"
                  style={ActiveLink}
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link nav-link-contact pb-1"
                  style={ActiveLink}
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <button
            id="menu-btn"
            className={` hamburger    focus:outline-none xl:hidden
             ${isMenuOpen ? "open" : ""}
            `}
            onClick={handleNavToggle}
            type="button"
          >
            <span className="hamburger-top "></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        <div
          id="menu"
          className={`  rounded-lg    
             ${isMenuOpen ? "" : "hidden"}
          `}
        >
          <ul className="flex flex-col items-center justify-center z-10 pt-2 w-full  space-y-10  shadow-md bg-white  font-bold text-[#121212] rounded-md  ">
            <li className="pt-5">
              <NavLink
                onClick={handleNavLinks}
                className="w-full text-center text-xl md:text-lg"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleNavLinks}
                className="w-full text-center text-xl md:text-lg"
                to="about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleNavLinks}
                className="w-full text-center text-xl md:text-lg"
                to="highlights"
              >
                Highlights
              </NavLink>
            </li>
            <li className="pb-5">
              <NavLink
                onClick={handleNavLinks}
                className="w-full text-center text-xl md:text-lg"
                to="contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
