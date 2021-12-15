import ServiceDesc from './ServiceDesc';

const GamingServcies = () => {
  return (
    <section className="  p-5 bg-[#F4F4F4] z-20 relative">
      <div className="container mx-auto flex flex-col items-center justify-center mb-10 mt-20">
        <h1 className="text-3xl md:text-5xl lg:text-6xl text-center font-extrabold mb-5 text-gray-500 pt-5">
          Service Description
        </h1>
        <ServiceDesc />
      </div>
    </section>
  );
};

export default GamingServcies;
