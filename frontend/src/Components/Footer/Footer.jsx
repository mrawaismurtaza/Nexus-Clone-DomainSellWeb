import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="Container-Sec">
        <div className="About-Item">
          <h3>About Nexus</h3>
          <p>
          At Nexus Technologies,
          We Value every single client We have. We are always glad to hear from you.
          </p>
          <button className="btn btn-primary Button">READ MORE</button>
        </div>
        <div className="Why-Item">
          <h3>Resources</h3>
          <ul>
            <li>
              <a href="https://clientarea.nexus.pk/submitticket.php?currency=1">> Support</a>
            </li>
            <li>
              <a href="https://nexus.pk/clientarea/?currency=1">> Client Area</a>
            </li>
            <li>
              <a href="https://clientarea.nexus.pk/index.php?rp=%2Fknowledgebase&currency=1">> Knowledge Base</a>
            </li>
            <li>
              <a href="https://nexus.pk/addons/">> Adonns</a>
            </li>
          </ul>
        </div>
        <div className="Info-Item">
          <h3>Company</h3>
          <ul>
            <li>
              <a href="https://nexus.pk/about-us/">> About us</a>
            </li>
            <li>
              <a href="https://nexus.pk/contact-us/">
                > Contact Us
              </a>
            </li>
            <li>
              <a href="https://nexus.pk/portfolio/">
                > Portfolio
              </a>
            </li>
            <li>
              <a href="https://nexus.pk/payment-methods/">
                > Payment Methods
              </a>
            </li>
          </ul>
        </div>
        <div className="Contact-Item">
            <h3 class="widget-title">Legal</h3>{" "}
            <address>
              <ul className="ul-item">
                <li>
                  <a href="https://nexus.pk/terms-conditions/">> Terms & Conditions</a>
                </li>
                <li>
                <a href="https://nexus.pk/policies/"> > Policies</a>
                </li>
                <li>
                 <a href="https://nexus.pk/copyright-policy/"> > Copyright Policy</a>
                </li>
              </ul>
            </address>
        </div>
      </div>
      <div className="Rights-Sec">
        <p>2024 © All rights reserved by Nexus Technologies.</p>
      </div>
    </div>
  );
}

export default Footer;
