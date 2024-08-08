import React from "react";
import "./Plan.css";
import Tick from "../../Assets/Images/Tick-Icon-slider.png";

function Plan() {
  return (
    <div className="Plan">
      <div className="Headings">
        <p>| CHOOSE YOUR PLAN |</p>
        <p>Nexus's HOT Sellers!</p>
      </div>
      <div className="Plans">
        <div className="Plan-1">
          <div className="headings">
            <p>Web Hosting</p>
            <p>Unix Host 1</p>
          </div>
          <div className="Offers">
            <ul>
              <li>
                <img src={Tick} alt="" />
                Standard Performance
              </li>
              <li>
                <img src={Tick} alt="" />1 Website
              </li>
              <li>
                <img src={Tick} alt="" />2 GB Disk Space
              </li>
              <li>
                <img src={Tick} alt="" />
                10 GB Bandwidth
              </li>
              <li>
                <img src={Tick} alt="" />3 Databases
              </li>
              <li>
                <img src={Tick} alt="" />
                Free 1-Click WordPress Install
              </li>
              <li>
                <img src={Tick} alt="" />
                Free Domain Registration & Renewal
              </li>
            </ul>
          </div>
          <button className="btn btn-primary button">Order Now</button>
        </div>
        <div className="Plan-2">
          <div className="headings">
            <p>Web Hosting</p>
            <p>Unix Host 1</p>
          </div>
          <div className="Offers">
            <ul>
              <li>
                <img src={Tick} alt="" />
                Standard Performance
              </li>
              <li>
                <img src={Tick} alt="" />1 Website
              </li>
              <li>
                <img src={Tick} alt="" />2 GB Disk Space
              </li>
              <li>
                <img src={Tick} alt="" />
                10 GB Bandwidth
              </li>
              <li>
                <img src={Tick} alt="" />3 Databases
              </li>
              <li>
                <img src={Tick} alt="" />
                Free 1-Click WordPress Install
              </li>
              <li>
                <img src={Tick} alt="" />
                Free Domain Registration & Renewal
              </li>
            </ul>
          </div>
          <button className="btn btn-primary button">Order Now</button>
        </div>
        <div className="Plan-3">
          <div className="headings">
            <p>Web Hosting</p>
            <p>Unix Host 1</p>
          </div>
          <div className="Offers">
            <ul>
              <li>
                <img src={Tick} alt="" />
                Standard Performance
              </li>
              <li>
                <img src={Tick} alt="" />1 Website
              </li>
              <li>
                <img src={Tick} alt="" />2 GB Disk Space
              </li>
              <li>
                <img src={Tick} alt="" />
                10 GB Bandwidth
              </li>
              <li>
                <img src={Tick} alt="" />3 Databases
              </li>
              <li>
                <img src={Tick} alt="" />
                Free 1-Click WordPress Install
              </li>
              <li>
                <img src={Tick} alt="" />
                Free Domain Registration & Renewal
              </li>
            </ul>
          </div>
          <button className="btn btn-primary button">Order Now</button>
        </div>
        <div className="Plan-4">
          <div className="headings">
            <p>Web Hosting</p>
            <p>Unix Host 1</p>
          </div>
          <div className="Offers">
            <ul>
              <li>
                <img src={Tick} alt="" />
                Standard Performance
              </li>
              <li>
                <img src={Tick} alt="" />1 Website
              </li>
              <li>
                <img src={Tick} alt="" />2 GB Disk Space
              </li>
              <li>
                <img src={Tick} alt="" />
                10 GB Bandwidth
              </li>
              <li>
                <img src={Tick} alt="" />3 Databases
              </li>
              <li>
                <img src={Tick} alt="" />
                Free 1-Click WordPress Install
              </li>
              <li>
                <img src={Tick} alt="" />
                Free Domain Registration & Renewal
              </li>
            </ul>
          </div>
          <button className="btn btn-primary button">Order Now</button>
        </div>
      </div>
    </div>
  );
}

export default Plan;
