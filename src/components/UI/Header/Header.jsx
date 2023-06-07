import { Link } from "react-router-dom";
import { RxSketchLogo } from "react-icons/rx";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-primary">
      <Link to="/" className="logo fw-bold">
        <RxSketchLogo className="logo-icon" />
        company
      </Link>
      <div className="nav-list fw-bold">
        <Link to="/users" className="link">
          Our members
        </Link>
        <Link to="/contacts" className="link">
          Contacts
        </Link>
      </div>
    </header>
  );
};

export default Header;
