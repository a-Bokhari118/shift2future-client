import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const OurTeam = () => {
  const data = [
    {
      name: 'John Doe',
      job: 'CEO',
      tw: 'https://www.google.com',
      lin: 'https://www.google.com',
      fac: 'https://www.google.com',
      img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
    {
      name: 'Sami Khalid',
      job: 'HR',
      tw: 'https://www.google.com',
      lin: 'https://www.google.com',
      fac: 'https://www.google.com',
      img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      name: 'John Smith',
      job: 'Web Developer',
      tw: 'https://www.google.com',
      lin: 'https://www.google.com',
      fac: 'https://www.google.com',
      img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
    {
      name: 'Jane Doe',
      job: 'Marketing Manager',
      tw: 'https://www.google.com',
      lin: 'https://www.google.com',
      fac: 'https://www.google.com',
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      name: 'John Doe',
      job: 'Marketing',
      tw: 'https://www.google.com',
      lin: 'https://www.google.com',
      fac: 'https://www.google.com',
      img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
  ];
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-center font-extrabold mb-5 text-gray-500 ">
            Our Team
          </h1>
        </div>
        <div className="flex flex-wrap -m-4 items-center justify-center pb-24">
          {data.map((item, index) => (
            <div className="p-4 lg:w-1/6 md:w-1/2" key={index}>
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt={item.name}
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={item.img}
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-white">
                    Alper Kamu
                  </h2>
                  <h3 className="text-gray-500 mb-3">{item.job}</h3>

                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <FaLinkedin />
                    </a>
                    <a className="ml-2 text-gray-500">
                      <FaTwitter />
                    </a>
                    <a className="ml-2 text-gray-500">
                      <FaFacebook />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1638633621 pt-28">
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

export default OurTeam;
