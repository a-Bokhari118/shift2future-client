import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';

const WhyUs = () => {
  return (
    <section className="relative text-gray-600 body-font  ">
      <div className="container mx-auto px-5 py-24 flex flex-col lg:flex-row pt-20 pb-36 items-center ">
        <div className=" order-1 lg:w-[50%] w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              alt="feature"
              src="/images/why.svg"
              className="w-full h-full object-cover object-center block"
              fill="responsive"
              height={1080}
              width={1920}
            />
          </div>
        </div>
        <div className=" order-2 flex flex-col flex-wrap lg:py-6 -mb-10  lg:px-12 text-left w-full justify-center lg:w-[50%]">
          <h4 className="text-xl text-mainColor">Why Choose us</h4>
          <h1 className="text-xl lg:text-2xl md:text-xl xl:text-4xl text-white">
            Your Goal is Our Achievement
          </h1>
          <p className="mt-10 leading-relaxed text-gray-200 md:text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,
            corporis perferendis? Porro id eaque nostrum laborum molestias.
            Accusantium animi natus incidunt vero voluptatem! Mollitia dolor
            ducimus accusantium
          </p>
          <div className="flex flex-col py-2 mt-10 space-y-4 text-white">
            <div className="flex items-center space-x-3">
              <FaCheck />
              <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            </div>
            <div className="flex items-center space-x-3">
              <FaCheck />
              <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            </div>
            <div className="flex items-center space-x-3">
              <FaCheck />
              <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="custom-shape-divider-bottom-1638633621  ">
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
    </section>
  );
};

export default WhyUs;
