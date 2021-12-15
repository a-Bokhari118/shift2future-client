import Gallrey from 'components/gaming/Gallrey';
import GamingHeader from 'components/gaming/GamingHeader';
import GamingServcies from 'components/gaming/GamingServcies';

const gamingSetup = () => {
  return (
    <div className="bg-sndColor">
      <GamingHeader />
      <GamingServcies />
      <Gallrey />
    </div>
  );
};

export default gamingSetup;
