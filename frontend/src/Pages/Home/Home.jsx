import React from 'react'
import Navbar from '../../Components/Navbar/Navbarr';
import "./Home.css";
import Headline from '../../Components/HeadlineBar/Headline';
import Slider from '../../Components/BannerSlider/Slider';
import Stat from '../../Components/CustomerStat/Stat';
import Plan from '../../Components/Plans/Plan';

function Home() {
  return (
    <div className="Home">
      <Navbar/>
      <Headline/>
      <Slider/>
      <Stat/>
      <Plan/>
    </div>
  )
}

export default Home