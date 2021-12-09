const Gallery = () => {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-16 mx-auto flex flex-wrap mb-24 pb-36">
        <div className="flex w-full mb-20 flex-wrap items-center justify-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-center font-extrabold mb-5 text-gray-500 ">
            Our Work
          </h1>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://www.gamingdebugged.com/wp-content/uploads/2021/09/purple-gaming-set-up-1.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="http://afrienergyonline.com/wp-content/uploads/2019/05/89c665bf9f3353b311e8960f418e3210.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="https://1.bp.blogspot.com/-5uxdFJeQ69I/YIhHwQuPV6I/AAAAAAAAD3k/RUKfvB9kp0wMO_1n0n-oeDVQpYLF97EGQCLcBGAsYHQ/s1280/1.jpg"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/165146185/original/2cf72b5e8d9a5ae489cbed6463cd9c0dcbc7c5d1/design-you-a-pc-setup.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://miro.medium.com/max/1400/1*W6wAfqHHjMr3jbaZ99DKtQ.png"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://www.deephouseamsterdam.com/wp-content/uploads/2015/08/Kinetic_Light_Featured.jpg"
              />
            </div>
          </div>
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

export default Gallery;
