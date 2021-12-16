import Image from 'next/image';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
const Header = () => {
  let router = useRouter();
  let { t, lang } = useTranslation('header');
  console.log(lang);
  return (
    <header className="px-4 relative z-20 py-16">
      <div className="flex flex-col md:flex-row items-center container mx-auto ">
        <div
          className={`text-white lg:pt-0 w-full ${
            lang === 'en' ? 'md:order-1 text-left' : 'md:order-2 text-right'
          }`}
        >
          {lang === 'en' ? (
            <h2 className=" text-3xl sm:text-3xl md:text-2xl lg:text-4xl xl:text-5xl font-extrabold uppercase transform">
              <span className="text-mainColor">{t('name')}</span>{' '}
              {t('greeting')}
            </h2>
          ) : lang === 'ar' ? (
            <h2 className=" text-3xl sm:text-3xl md:text-2xl lg:text-4xl xl:text-6xl font-extrabold uppercase transform">
              {t('greeting')}{' '}
              <span className="text-mainColor">{t('name')}</span>
            </h2>
          ) : (
            ''
          )}

          <p className="mt-3">{t('desc')}</p>
          <div className=" mt-10">
            <a className="border-b-2 border-mainColor text-3xl " href="#0">
              {t('order')}
            </a>
          </div>
        </div>

        <div
          className={`relative w-full  ${
            lang === 'en' ? 'md:order-2' : 'md:order-1'
          }`}
        >
          <Image
            src="/images/header-image.svg"
            alt="Header Image"
            layout="responsive"
            width={1920}
            height={1080}
            className="w-full h-full object-cover object-center block"
          />
        </div>
      </div>

      <div className="custom-shape-divider-bottom-1638633621">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </header>
  );
};

export default Header;
