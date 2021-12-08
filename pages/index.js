import Header from '@components/Header';
import Process from '@components/Process';
import WhyUs from 'components/WhyUs';

export default function Home() {
  return (
    <>
      <div className="bg-sndColor">
        <Header />
        <Process />
        <WhyUs />
      </div>
    </>
  );
}
