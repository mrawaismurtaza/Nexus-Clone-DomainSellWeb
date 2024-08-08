import React, { useEffect, useState } from 'react';
import "./Stat.css";

const animateNumber = (end, duration, setNumber) => {
  let start = 0;
  let current = start;
  const increment = end / (duration / 10);

  const timer = setInterval(() => {
    current += increment;
    if (current >= end) {
      clearInterval(timer);
      current = end;
    }
    setNumber(Math.floor(current));
  }, 10);
};

function Stat() {
  const [customers, setCustomers] = useState(0);
  const [capterra, setCapterra] = useState(0);
  const [trustPilot, setTrustPilot] = useState(0);
  const [q2, setQ2] = useState(0);

  useEffect(() => {
    animateNumber(10000, 2000, setCustomers);
    animateNumber(7598, 2000, setCapterra);
    animateNumber(8345, 2000, setTrustPilot);
    animateNumber(2598, 2000, setQ2);
  }, []);

  return (
    <div className="Stat">
      <div className="Customers">
        {customers}+
        <span>Customers Globally</span>
      </div>
      <div className="Capterra">
        {capterra}+
        <span>Capterra</span>
      </div>
      <div className="TrustPilot">
        {trustPilot}+
        <span>TrustPilot</span>
      </div>
      <div className="Q2">
        {q2}+
        <span>Q2</span>
      </div>
    </div>
  );
}

export default Stat;
