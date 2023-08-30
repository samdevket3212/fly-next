import Head from 'next/head';
import BannerTwo from '../components/BannerTwo';
import LiveAuction from '../components/LiveAuction';
import TopCollectors from '../components/TopCollectors';
import PopularCollection from '../components/PopularCollection';
import LatestNews from '../components/LatestNews';
import SellCard from '../components/SellCard';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';


function HomeTwo() {
  return (
    <div>
      <BannerTwo />
 
<br></br>
<br></br>
   
      <TopCollectors />
      <PopularCollection />
     <LatestNews />
    

      <SellCard />
      
      <LiveAuction />
   


    </div>
  );
}

export default HomeTwo
