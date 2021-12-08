import Header from '@components/Header';
import Process from '@components/Process';
import Services from '@components/Servcies';
import WhyUs from '@components/WhyUs';

export default function Home() {
  return (
    <>
      <div className="bg-sndColor">
        <Header />
        <Process />
        <WhyUs />
        <Services />
      </div>
    </>
  );
}
