import Image from 'next/image';

const Gallrey = () => {
  return (
    <section className="px-4 relative z-20  w-full bg-[#F4F4F4] pb-10">
      <h1 className="text-3xl md:text-5xl lg:text-6xl text-center font-extrabold mb-5 text-gray-500 pt-5 uppercase">
        Gaming Setups We Made
      </h1>
      <div className="container mx-auto">
        <div className="grid-cols-3 p-0 lg:p-20 space-y-2 bg-[#F4F4F4] lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3 ">
          <div className="relative w-full rounded">
            <Image
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
              alt="image"
              layout="responsive"
              height={1080}
              width={1920}
              className="w-full object-cover h-full object-center block"
            />
          </div>
          <div className="relative w-full col-span-2 row-span-2 rounded">
            <Image
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
              alt="image"
              layout="responsive"
              height={1080}
              width={1920}
              className="w-full object-cover h-full object-center block"
            />
          </div>
          <div className="relative w-full rounded">
            <Image
              src="http://afrienergyonline.com/wp-content/uploads/2019/05/89c665bf9f3353b311e8960f418e3210.jpg"
              alt="image"
              layout="responsive"
              height={1080}
              width={1920}
              className="w-full object-cover h-full object-center block"
            />
          </div>
          <div className="relative w-full rounded">
            <Image
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
              alt="image"
              layout="responsive"
              height={1080}
              width={1920}
              className="w-full object-cover h-full object-center block"
            />
          </div>
          <div className="relative w-full rounded">
            <Image
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
              alt="image"
              layout="responsive"
              height={1080}
              width={1920}
              className="w-full object-cover h-full object-center block"
            />
          </div>
          <div className="relative w-full rounded">
            <Image
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
              alt="image"
              layout="responsive"
              height={1080}
              width={1920}
              className="w-full object-cover h-full object-center block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallrey;
