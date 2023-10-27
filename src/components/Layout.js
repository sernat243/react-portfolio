import Header from "./Header";
import Routes from "../Routes";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="content">
        <Routes />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;