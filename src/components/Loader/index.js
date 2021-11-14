import React from 'react';

// loader
import loader from 'src/assets/images/plant.gif';

const Loader = () => (
  <div className="loader">
    <p>Patience ça pousse...</p>
    <img
      src={loader}
      alt="plant.gif"
      width="100"
    />
  </div>
);

export default Loader;
