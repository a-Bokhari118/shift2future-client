import Image from 'next/image';

const GamingHeader = () => {
  return (
    <header
      className="px-4 relative pt-5  flex justify-center items-center"
      style={{ height: 'calc(100vh - 10vh)' }}
    >
      <div className="flex flex-col md:flex-row items-center container mx-auto">
        <div className="text-white lg:pt-0 w-full ">
          <h2 className=" text-2xl sm:text-3xl md:text-2xl lg:text-4xl xl:text-5xl font-extrabold uppercase transform">
            Start Your journey with the best{' '}
            <span className="text-mainColor ">Gaming Setup</span>
          </h2>
          <p className="mt-3 lg:mr-8 ">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna.
          </p>
          <div className=" mt-10">
            <a className="border-b-2 border-mainColor text-3xl " href="#0">
              Book Now
            </a>
          </div>
        </div>

        <div className="relative w-full h-[50vh] ">
          <Image src="/images/gaming.svg" alt="Header Image" layout="fill" />
        </div>
      </div>
    </header>
  );
};

export default GamingHeader;
