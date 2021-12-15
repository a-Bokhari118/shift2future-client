import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';

const ServiceDesc = () => {
  return (
    <header className="px-4 relative z-20 py-16 w-full bg-[#F4F4F4]">
      <div className="flex flex-col lg:flex-row items-center container mx-auto gap-x-10 ">
        <div className="order-2 text-gray-900 lg:pt-0 w-full pt-10 ">
          <h2 className="text-3xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-3xl font-extrabold uppercase transform ">
            Creating or upgrading your gaming/office setups
          </h2>
          <p className="mt-3">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna.
          </p>
          <div className="mb-5 mt-10 ">
            <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-2 gap-5">
              <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti, qui?
              </div>
              <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti, qui?
              </div>
              <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti, qui?
              </div>
              <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti, qui?
              </div>
              <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti, qui?
              </div>
              <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti, qui?
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 relative w-full h-[50vh] ">
          <Image
            src="https://www.gamingdebugged.com/wp-content/uploads/2021/09/purple-gaming-set-up-1.jpg"
            alt="Header Image"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
      </div>
    </header>
  );
};

export default ServiceDesc;
