import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navBar, setNavBar] = useState('');
  const { t, lang } = useTranslation('navbar');

  let router = useRouter();

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const backgroundcolor =
        window.scrollY > 100 ? 'border-b border-mainColor' : '';

      setNavBar(backgroundcolor);
    });
  }, []);
  return (
    <section
      className={`bg-sndColor/90 w-full z-30 sticky top-0  ${navBar} transition duration-300 `}
    >
      <nav className="relative flex flex-wrap container mx-auto items-center justify-between w-full  py-4 md:py-0 px-4 text-lg text-gray-700 min-h-[10vh] ">
        <div className={`${lang === 'en' ? 'order-1' : 'order-2'}`}>
          <a href="#">
            <img
              src="/images/logo.svg"
              alt="shift2future logo"
              className="w-24 md:w-28  py-2 "
            />
          </a>
        </div>

        <div
          className="h-6 w-6 cursor-pointer md:hidden block z-40"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>

        <div
          className={`${
            lang === 'en' ? 'order-2' : 'order-1'
          }  hidden w-full md:flex md:items-center md:w-auto`}
        >
          <ul className="pt-4 text-base text-white md:flex md:justify-between md:pt-0">
            <li className={`${lang === 'en' ? 'order-2' : 'order-6'} `}>
              <a
                className="md:p-4 py-2 block hover:text-mainColor uppercase"
                href="#"
              >
                {t('servcies')}
              </a>
            </li>
            <li className={`${lang === 'en' ? 'order-2' : 'order-5'} `}>
              <a
                className="md:p-4 py-2 block hover:text-mainColor uppercase"
                href="#"
              >
                {t('workprog')}
              </a>
            </li>
            <li className={`${lang === 'en' ? 'order-2' : 'order-4'} `}>
              <a
                className="md:p-4 py-2 block hover:text-mainColor uppercase"
                href="#"
              >
                {t('whyus')}
              </a>
            </li>
            <li className={`${lang === 'en' ? 'order-2' : 'order-3'} `}>
              <a
                className="md:p-4 py-2 block hover:text-mainColor uppercase"
                href="#"
              >
                {t('works')}
              </a>
            </li>
            <li className="order-2">
              <a
                className="md:p-4 py-2 block hover:text-mainColor uppercase"
                href="#"
              >
                {t('contact')}
              </a>
            </li>
            <li
              className={`flex items-center justify-center ${
                lang === 'en' ? 'order-7' : 'order-1'
              }`}
            >
              {lang === 'en' ? (
                <a className="md:px-4 py-1 block bg-mainColor text-gray-800 rounded">
                  <Link href={router.asPath} locale={'ar'}>
                    عربي
                  </Link>
                </a>
              ) : lang === 'ar' ? (
                <a className="md:px-4 py-1 block bg-mainColor text-gray-800 rounded">
                  <Link href={router.asPath} locale={'en'}>
                    English
                  </Link>
                </a>
              ) : (
                ''
              )}
            </li>
          </ul>
        </div>

        {/* mobile menu */}

        <div
          className={`md:hidden absolute right-0 top-[10vh] overflow-hidden w-full h-[50vh] transform transition duration-300 ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <ul
            className={`pt-24 text-base text-sndColor flex flex-col items-center bg-mainColor h-full transform transition duration-300 `}
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
