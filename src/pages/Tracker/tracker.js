/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from 'react';
import { HashLoader } from 'react-spinners';  // Import HashLoader from react-spinners
import './tracker.css';

export const Tracker = () => {
  const [loading, setLoading] = useState(true); // State to manage iframe loading

  // Function to handle iframe load event
  const handleLoad = () => {
    setLoading(false); // Set loading to false when iframe finishes loading
  };

  return (
    <div className='tracker'>
      <div className='trackerSec'>
        <div className='trackertitle'>
          <h2>Carbon Footprint Tracker</h2>
        </div>

        {loading && (  // Show spinner while iframe is loading
          <div className="spinner-container">
            <HashLoader color="#007bff" loading={loading} size={50} />
          </div>
        )}

        {/* Scrollable container for the iframe */}
        <div className='iframe-container'>
          <iframe 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            marginWidth="0" 
            marginHeight="0" 
            scrolling="no" 
            src="https://calculator.carbonfootprint.com/calculator.aspx?lang=en-GB"
            onLoad={handleLoad}  // Set loading to false once iframe loads
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Tracker;