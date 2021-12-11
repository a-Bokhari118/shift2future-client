import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <section className="bg-sndColor w-full relative ">
      <nav className="flex flex-wrap container mx-auto items-center justify-between w-full  py-4 md:py-0 px-4 text-lg text-gray-700 ">
        <div>
          <a href="#">
            <img
              src="/images/logo.svg"
              alt="shift2future logo"
              className="w-24 md:w-28  py-2 "
            />
          </a>
        </div>

        <div
          className="h-6 w-6 cursor-pointer md:hidden block z-20"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>

        <div className="hidden w-full md:flex md:items-center md:w-auto">
          <ul className="pt-4 text-base text-white md:flex md:justify-between md:pt-0">
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
            <li className="flex items-center justify-center">
              <a
                className="md:px-4 py-1 block bg-mainColor text-gray-800 rounded"
                href="#"
              >
                عربي
              </a>
            </li>
          </ul>
        </div>

        {/* mobile menu */}

        <div className="md:hidden absolute right-0 top-0 z-10 overflow-hidden w-full h-[50vh]">
          <ul
            className={`pt-24 text-base text-sndColor flex flex-col items-center bg-mainColor h-full transform transition duration-300 translate-y-full ${
              isOpen && 'translate-y-0'
            }`}
          >
            <h3 className="text-2xl uppercase text-gray-900 mb-2">
              Shift2future
            </h3>
            <li>
              <a className="p-4 py-2 block hover:text-gray-400" href="#">
                Features
              </a>
            </li>
            <li>
              <a className="p-4 py-2 block hover:text-gray-400" href="#">
                Pricing
              </a>
            </li>
            <li>
              <a className="p-4 py-2 block hover:text-gray-400" href="#">
                Customers
              </a>
            </li>
            <li>
              <a className="p-4 py-2 block hover:text-gray-400" href="#">
                Blog
              </a>
            </li>
            <li className="flex  mb-4">
              <a
                className="px-4 py-1 block bg-mainColor text-gray-800 rounded"
                href="#"
              >
                عربي
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
