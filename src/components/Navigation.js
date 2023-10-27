import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul className="list-unstyled d-flex justify-content-end">
        <li className="me-3">
          <NavLink to="/about" className="text-light text-decoration-none">About Me</NavLink>
        </li>
        <li className="me-3">
          <NavLink to="/projects" className="text-light text-decoration-none">Projects</NavLink>
        </li>
        <li className="me-3">
          <NavLink to="/contact" className="text-light text-decoration-none">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/resume" className="text-light text-decoration-none">Resume</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;