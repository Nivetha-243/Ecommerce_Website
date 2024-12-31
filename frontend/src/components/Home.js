import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useLocation } from 'react-router';
import Freshcopy from './Freshcopy';


const Home = () => {
  const location = useLocation();
  return (
    <div>
      <div>
        <Header location={location} />
      </div>

        <div>
          <Freshcopy></Freshcopy>
        </div>

      <div>
        <Footer />
      </div>
    </div>

  )
}

export default Home;
