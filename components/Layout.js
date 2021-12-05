import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="bg-[#121212]">
      <Navbar />
      <main className="my-7">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
