import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const githubUrl = 'https://github.com/sernat243';
  const linkedinUrl = 'https://www.linkedin.com/in/your-linkedin-profile'; // will update later

  return (
    <footer className="bg-dark text-light py-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <p>&copy; 2023 Gabriel Serna</p>
          </div>
          <div className="col-md-6 text-end">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-light me-2">
              <FaGithub size={30} />
            </a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-light">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;