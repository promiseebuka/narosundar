import { Link } from "react-router-dom";
import logo from "../images/logo/logo.png";
import { pageLinks } from "../data";

function Header() {
  return (
    <header>
      <Link href="/">
        <img src={logo} alt="narosundar" />
      </Link>

      <ul>
        {pageLinks.map((link) => {
          const { id, name, path } = link;
          return (
            <li key={id}>
              <Link to={path}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
}
export default Header;
