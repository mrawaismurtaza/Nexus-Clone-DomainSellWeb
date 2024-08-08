import React from 'react';
import Marquee from "react-fast-marquee";
import "./Headline.css";

function Headline() {
  return (
    <Marquee pauseOnHover={true}>
    <div className="Headline">
        <ul>
            <li>Basic Hosting Packages Price Revision</li>
            <li>Extended Lifecycle Support Fee on End-Of-Life Operating Systems</li>
            <li>Important Announcement: .Com Domains Price Revision</li>
            <li>New Host Zero - Simplified Shared Hosting</li>
            <li>Hybrid Cloud / DCVM Backup Policy & Pricing Update</li>
        </ul>
    </div>
    </Marquee>
  )
}

export default Headline