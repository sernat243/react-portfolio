import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const githubUrl = "https://github.com/sernat243";
  const linkedinUrl = "https://www.linkedin.com/in/your-linkedin-profile"; // will update later

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-text">
          <p>&copy; 2023 Gabriel Serna</p>
        </div>
        <div className="footer-links">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;