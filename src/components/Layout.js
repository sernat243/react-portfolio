import Header from "./Header";
import Routes from "../Routes";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="content">
        <Routes />
      </div>
      <footer>Footer content goes here</footer>
    </div>
  );
};

export default Layout;