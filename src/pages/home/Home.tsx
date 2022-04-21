import * as React from 'react';
import './home.scss';

import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        home container
        <div className="widgets">
          <Widget />
        </div>
      </div>
    </div>
  );
};

export default Home;
