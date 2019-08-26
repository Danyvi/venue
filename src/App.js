import React from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header';
import Featured from './components/featured/Index';
import VenueInfo from './components/venueInfo/index';
import Highlights from './components/Highlights/index';

function App() {
  return (
    <div className="App" style= {{ height: '1500px' }}>
      <Header />
      <Featured />
      <VenueInfo />
      <Highlights />
    </div>
  );
}

export default App;
