import { FaCheck, FaFileSignature, FaPhoneAlt } from 'react-icons/fa';
import { SiKasasmart, SiPcgamingwiki } from 'react-icons/si';
import { RiLightbulbFlashFill } from 'react-icons/ri';
const Services = () => {
  const data = [
    {
      icon: <SiKasasmart />,
      text: 'Smart House',
      desc: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbin microdosing tousled waistcoat',
    },
    {
      icon: <SiPcgamingwiki />,
      text: 'Gaming Setup ',
      desc: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbin microdosing tousled waistcoat',
    },
    {
      icon: <RiLightbulbFlashFill />,
      text: 'Lighting System',
      desc: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbin microdosing tousled waistcoat',
    },
  ];

  return (
    <section className=" mt-24  p-5 bg-[#F4F4F4] z-20 relative">
      <div className="container mx-auto flex flex-col items-center justify-center mb-20">
        <h1 className="text-3xl md:text-5xl lg:text-6xl text-center font-extrabold mb-5 text-gray-500 ">
          Our Services
        </h1>

        <div className="flex flex-wrap m-4">
          {data?.map((item, index) => (
            <div className="p-4 lg:w-1/3" key={index}>
              <div className="h-full  bg-opacity-75 px-8 pt-16 pb-12 md:pb-28 rounded-lg overflow-hidden text-center relative flex items-center flex-col space-y-4">
                <div className="text-5xl md:text-6xl mb-3">{item.icon}</div>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  {item.text}
                </h1>
                <p className="leading-relaxed text-gray-600">{item.desc}</p>
                <a
                  href=""
                  className="px-2 py-1 bg-sndColor text-mainColor rounded-lg "
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="wave2 ">
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

export default Services;
