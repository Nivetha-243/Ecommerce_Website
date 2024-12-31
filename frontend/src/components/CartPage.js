import React from 'react';
import './cartpage.css';
import Header from './Header';
import Footer from './Footer';

const CartPage = () => {
  return (
    <div>
      <div>
        <Header/>
      </div>
        <div className='cartpage'>
            <h2><a href="/Home" >Home</a>/Cart</h2>
        </div>
        <div>
        <Footer/>
      </div>

    </div>
  )
}

export default CartPage;
