import Navbar from "./Navbar";
import Footer from "./Footer";
import "./styles/Layout.scss";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="app-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
