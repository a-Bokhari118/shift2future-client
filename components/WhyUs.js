import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';

const WhyUs = () => {
  return (
    <section className="text-gray-600 body-font container mx-auto ">
      <div className="px-5 py-24 flex flex-col lg:flex-row">
        <div className=" order-1  lg:w-1/2 w-full mb-10  min-h-full  lg:mb-0 rounded-lg overflow-hidden ">
          <img alt="feature" src="/images/why.svg" className="object-cover" />
        </div>
        <div className=" order-2 flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:px-12 text-left w-full justify-center">
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
    </section>
  );
};

export default WhyUs;
