import { Route, Routes as AppRoutes, Navigate } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

const DefaultRoute = () => {
  return <Navigate to="/about" />;
}

const Routes = () => {
    return (
      <AppRoutes>
        <Route path="/" element={<DefaultRoute />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </AppRoutes>
    );
  };

export default Routes;