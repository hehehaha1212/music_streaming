import React from 'react';
import Header from '../components/Header';

import TopArtists from '../components/TopArtists';
import DoseofLove from '../sections/DoseofLove';
import International from '../sections/International';
import Devotional from '../sections/Devotional';
import Footer from '../components/Footer';

const Home=()=>{
    return(
    <>
      <Header />
      <DoseofLove/>
      <TopArtists sectionTitle = "Top Artists"/>
      <International/>
      <Devotional/>
      <Footer/>
    </>
    );
}

export default Home;