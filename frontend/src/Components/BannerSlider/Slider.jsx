import React, { useState } from "react";
import Tick from "../../Assets/Images/Tick-Icon-slider.png";
import Banner1 from "../../Assets/Images/Host-Zero-Banner.png";
import Banner2 from "../../Assets/Images/DCVM.png";
import "./Slider.css";
import { GoDotFill } from "react-icons/go";

function Slider() {
  const [activeSlide, setActiveSlide] = useState(1);

  const handleDotClick = (slideNumber) => {
    setActiveSlide(slideNumber);
  };

  return (
    <div className="Slider">
      <div className={`Slider-1 ${activeSlide === 1 ? "active" : "inactive"}`}>
        <div className="left">
          <div>
            <p>| Unlock Unlimited Potential with Affordable Hosting |</p>
          </div>
          <div>
            <p>Host Zero at Unbeatable Price</p>
          </div>
          <div>
            <ul>
              <li>
                <img src={Tick} alt="Tick Sign" />
                Enjoy Share Hosting at incredibly low price
              </li>
              <li>
                <img src={Tick} alt="Tick Sign" />
                Experience top-notch performance with robust features
              </li>
              <li>
                <img src={Tick} alt="Tick Sign" />
                Seamless integration with one click Installer
              </li>
              <li>
                <img src={Tick} alt="Tick Sign" />
                STARTING AT <span>PKR</span> 265.83 / M
              </li>
            </ul>
          </div>
          <div>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
        <div className="right">
          <img src={Banner1} alt="BannerImage" />
        </div>
      </div>

      <div className={`Slider-2 ${activeSlide === 2 ? "active" : "inactive"}`}>
        <div className="left">
          <div>
            <p>| Dedicated Cloud VM |</p>
          </div>
          <div>
            <p>New,High Speed Hybrid Cloud</p>
          </div>
          <div>
            <ul>
              <li>
                <img src={Tick} alt="Tick Sign" />
                Fast, Easy & Secure Setup
              </li>
              <li>
                <img src={Tick} alt="Tick Sign" />
                Scalable & Realtime Reporting
              </li>
              <li>
                <img src={Tick} alt="Tick Sign" />
                High Speed Bandwidth
              </li>
              <li>
                <img src={Tick} alt="Tick Sign" />
                Built-in DDOS & Firewall Protection
              </li>
            </ul>
          </div>
          <div>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
        <div className="right">
          <img src={Banner2} alt="BannerImage" />
        </div>
      </div>

      <div className={`Slider-3 ${activeSlide === 3 ? "active" : "inactive"}`}>
        <div className="left">
          <div>
            <p>| Dedicated Cloud VM |</p>
          </div>
          <div>
            <p>New, High Speed Hybrid Cloud</p>
          </div>
          <div>
            <ul>
              <li>
                <img src={Tick} alt="Tick Sign" />
                Fast, Easy & Secure Setup
              </li>
              <li>
                <img src={Tick} alt="Tick Sign" />
                Scalable & Realtime Reporting
              </li>
              <li>
                <img src={Tick} alt="Tick Sign" />
                High Speed Bandwidth
              </li>
              <li>
                <img src={Tick} alt="Tick Sign" />
                Built-in DDOS & Firewall Protection
              </li>
            </ul>
          </div>
          <div>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
        <div className="right">
          <img src={Banner2} alt="BannerImage" />
        </div>
      </div>

      <div className="icon-container">
        <GoDotFill className="dot-1" onClick={() => handleDotClick(1)} />
        <GoDotFill className="dot-2" onClick={() => handleDotClick(2)} />
        <GoDotFill className="dot-3" onClick={() => handleDotClick(3)} />
      </div>
    </div>
  );
}

export default Slider;
