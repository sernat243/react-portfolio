import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul className="list-unstyled d-flex justify-content-end">
        <li className="me-3">
          <NavLink to="/about" activeClassName="selected-link" className="text-light text-decoration-none">About Me</NavLink>
        </li>
        <li className="me-3">
          <NavLink to="/projects" activeClassName="selected-link" className="text-light text-decoration-none">Projects</NavLink>
        </li>
        <li className="me-3">
          <NavLink to="/contact" activeClassName="selected-link" className="text-light text-decoration-none">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/resume" activeClassName="selected-link" className="text-light text-decoration-none">Resume</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;