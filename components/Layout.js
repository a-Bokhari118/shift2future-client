import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="bg-sndColor">
      <Navbar />
      <main className="my-7">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
