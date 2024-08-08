import React, { useState } from "react";
import Navbarr from "../../Components/Navbar/Navbarr";
import "./Domain.css"; // Import the CSS file for styling

function Domain() {
  const [domain, setDomain] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!domain.trim()) {
      setError("Please enter a domain name.");
      setResult(null);
      return;
    }

    const encodedDomain = encodeURIComponent(domain);

    const myHeaders = new Headers();
    myHeaders.append("apikey", "7LdlkN5FFs78EkZuurcvN5JpuSxuOC1Z");

    const requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    try {
      const response = await fetch(
        `https://api.apilayer.com/whois/check?domain=${encodedDomain}`,
        requestOptions
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setResult(data.result); // Assuming 'result' is either 'registered' or 'available'
      setError("");
    } catch (error) {
      console.error("Error fetching WHOIS data:", error);
      setResult(null);
      setError(
        "Failed to fetch WHOIS data. Please check the domain name and try again."
      );
    }
  };

  return (
    <div className="Domain">
      <Navbarr />
      <div className="Domain-Search">
        <h1>Domain Search</h1>
        <input
          type="text"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          placeholder="Enter domain name"
          className={error ? "input-error" : ""}
        />
        <button onClick={handleSearch}>Search</button>
        {result && (
          <div className="result">
            {result === "available" ? (
              <div className="alert alert-primary" role="alert">
                Domain is Available
              </div>
            ) : result === "registered" ? (
              <div className="alert alert-danger" role="alert">
                Domain is Registered
              </div>
            ) : (
              <div className="alert alert-secondary" role="alert">
                Status Unknown
              </div>
            )}
          </div>
        )}
        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
}

export default Domain;
