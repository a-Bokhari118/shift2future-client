const Navbar = () => {
  return (
    <section className="bg-[#121212] w-full">
      <nav
        className="
        flex flex-wrap
        container
        mx-auto
        items-center
        justify-between
        w-full
        
        py-4
        md:py-0
        px-4
        text-lg text-gray-700
        
      "
      >
        <div>
          <a href="#">
            <img
              src="/images/logo.svg"
              alt="shift2future logo"
              className="w-44 py-2"
            />
          </a>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          className="h-6 w-6 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <div
          className="hidden w-full md:flex md:items-center md:w-auto"
          id="menu"
        >
          <ul
            className="
            pt-4
            text-base 
            text-white
            md:flex
            md:justify-between 
            md:pt-0"
          >
            <li>
              <a className="md:p-4 py-2 block hover:text-gray-400" href="#">
                Features
              </a>
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:text-gray-400" href="#">
                Pricing
              </a>
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:text-gray-400" href="#">
                Customers
              </a>
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:text-gray-400" href="#">
                Blog
              </a>
            </li>
            <li>
              <a
                className="md:p-4 py-2 block hover:text-gray-400 text-gray-500"
                href="#"
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
