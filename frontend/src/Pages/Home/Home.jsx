import React from 'react'
import Navbar from '../../Components/Navbar/Navbarr';
import "./Home.css";
import Headline from '../../Components/HeadlineBar/Headline';
import Slider from '../../Components/BannerSlider/Slider';
import Stat from '../../Components/CustomerStat/Stat';
import Plan from '../../Components/Plans/Plan';
import Footer from '../../Components/Footer/Footer';

function Home() {
  return (
    <div className="Home">
      <Navbar/>
      <Headline/>
      <Slider/>
      <Stat/>
      <Plan/>
      <Footer/>
    </div>
  )
}

export default Home