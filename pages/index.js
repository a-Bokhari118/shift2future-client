import Header from '@components/Header';
import Process from '@components/Process';
import Services from '@components/Servcies';
import WhyUs from '@components/WhyUs';
import Gallery from '@components/Gallery';
import FAQ from '@components/FAQ';
import OurTeam from '@components/OurTeam';

export default function Home() {
  return (
    <>
      <div className="bg-sndColor">
        <Header />
        <Process />
        <WhyUs />
        <Services />
        <Gallery />
        <FAQ />
        <OurTeam />
      </div>
    </>
  );
}
