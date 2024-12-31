import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { CiLocationOn } from 'react-icons/ci';
import "./header.css";
import { CiSearch } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";



const Header = ({ location }) => {
  console.log(location);
  const profilename = location?.state?.user_name || "Guest";



  return (
    <div className='overall'>
      <div className='headerpage'>
        <div className='headershop'>
          <p><FaShoppingBag /><b>shop</b>cart</p>
        </div>
        <div className='location'>
          <p><span className='logolocation'><CiLocationOn /></span> Delhi, 110110</p>
        </div>
        <div className='profile'>
          <button className='b'>
            <CgProfile /> {profilename}
          </button>
          <div className='c'>
            <p><a href='Admin'>Add Products</a></p>
            <p><a href="\">Logout</a></p>
          </div>
        </div>
        <div className='search'>
          <p><CiSearch /></p>
          <input type="text" className='searchin' placeholder="Search" name="search" ></input>
        </div>
      </div>
      <div className="cartstyle">
        <a href="\CartPage"><FaCartShopping /> My Cart</a>
      </div>
      <div className='nav'>
        <nav className='navbar'>
          <ul>
            <li><a href='Fresh'>Fresh</a></li>
            <li><a href='TodayDeals'>Today's Deals</a></li>
            <li><a href='Reviews'>Reviews</a></li>
            <li><a href='Mobiles'>Mobiles</a></li>
            <li><a href='Gitfcards'>Gift Cards</a></li>
            <li><a href='Clothing'>Clothing</a></li>
            <li><a href='Health'>Health</a></li>
            <li><a href='Petcorner'>Pet Corner</a></li>
            <li><a href='Books'>Books</a></li>
            <li><a href='Beauty'>Beauty</a></li>
            <li><a href='Kitchen'>Kitchen</a></li>
            <li><a href='Bedroom'>Bed Room</a></li>
            <li><a href='Sport'>Sport</a></li>
            <li><a href='Bag'>Bags</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header;
