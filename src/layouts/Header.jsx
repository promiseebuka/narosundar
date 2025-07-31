import { Link, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import logo from "../images/logo/logo.png";
import { pageLinks } from "../data";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-primary  flex h-[70px] items sticky top-0 z-50 ">
      <div className="flex grow justify-between items-center mr-4 px-8">
        <Link to="/">
          <img src={logo} alt="narosundar" />
        </Link>

        <nav className="hidden lg:flex lg:space-x-6">
          {pageLinks.map((link) => {
            const { id, name, path } = link;
            return (
              <NavLink
                key={id}
                to={path}
                className="uppercase text-sm font-semibold text-white"
              >
                {name}
              </NavLink>
            );
          })}
        </nav>
      </div>
      <button className="uppercase text-white font-bold text-base bg-secondary px-5 w-[200px] ms-auto ">
        Free Quote
      </button>

      <button
        className="text-white px-8 cursor-pointer  lg:hidden"
        onClick={toggleMenu}
      >
        <FiMenu className="text-2xl" />
      </button>

      {/* Mobile Navigation */}

      <nav
        className={`lg:hidden absolute h-screen top-0 left-0 bg-white  transition-all duration-300 w-1/3 py-10 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {pageLinks.map((link) => {
          const { id, name, path } = link;
          return (
            <NavLink
              key={id}
              to={path}
              className="uppercase text-sm font-semibold hover:text-secondany transition duration-300 -trcking-wide block lg:hidden text-black py-4 px-6"
            >
              {name}
            </NavLink>
          );
        })}
      </nav>
    </header>
  );
}
export default Header;
