import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import image1 from './images/frontimage5.jpg';

import './fresh.css';
import axios from 'axios';



const Fresh = () => {
  const [product1, setProduct1] = useState(null);
  const [product2, setProduct2] = useState(null);
  const [product3, setProduct3] = useState(null);
  const product_ids = ["002", "001", "003"];
  const [showContent, setShowContent] = useState(false);
  const [showContent1, setShowContent1] = useState(false);
  const [showContent2, setShowContent2] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response1 = await axios.get('http://127.0.0.1:8000/api/products/' + product_ids[0] + '/get');
        const response2 = await axios.get('http://127.0.0.1:8000/api/products/' + product_ids[1] + '/get');
        const response3 = await axios.get('http://127.0.0.1:8000/api/products/' + product_ids[2] + '/get');

        setProduct1(response1.data);
        setProduct2(response2.data);
        setProduct3(response3.data);
      } catch (error) {
        alert("Error fetching product data: " + error.message);
      }
    };
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const AddCount = () => {
    setCartCount(cartCount + 1);
  }

  if (!product1 || !product2 || !product3) {
    return <div>Loading...</div>;
  }
  console.log("response 1", product1);
  console.log("response 2", product2);
  console.log("response 3", product3);

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  const toggleContent1 = () => {
    setShowContent1(!showContent1);
  };
  const toggleContent2 = () => {
    setShowContent2(!showContent2);
  };


  return (
    <div>
      <div>
        <Header />
      </div>
      <div className='combine'>
        <div className='topcontent'>
          <div>
            We picked some <br></br><span className='cool'>cool things</span><br></br> for you..<span className='cool'>!</span>
          </div>
          <div className='zoom'>
            <img src={image1} alt="coolimage"></img>
          </div>
        </div>
        <div className='total'>
          <div>
            <h3 className='hotdeal'>hot deals for you</h3>
          </div>
          <div className='freshimages'>
            {product1 && product1.map((product, index) => (
              <div key={index} onClick={toggleContent}>
                <div className="mainimage">
                  <figure>
                    <img src={`${'http://localhost:8000'+product.product_image}`} alt="Product" />
                    <figcaption>
                      {product.product_name}<br />
                      &#8377;{product.price}
                    </figcaption>
                  </figure>
                </div>
                {showContent && (
                  <div className='showcontent'>
                    <p className='addtocart' onClick={AddCount}>Add to Cart</p>
                    <p>{product.about_product}</p>
                    <div className='images'>
                      <div className='fourimages'>
                        <img src={`${'http://localhost:8000'+product.top_view}`} alt='fourimages'></img>
                        <img src={`${'http://localhost:8000'+product.right_side_view}`} alt='fourimages'></img>
                        <img src={`${'http://localhost:8000'+product.left_side_view}`} alt='fourimages'></img>
                        <video src={`${'http://localhost:8000'+product.video}`} width="100" controls autoplay muted className="freshvideo"></video>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div>
              {product2 && product2.map((product, index) => (
                <div key={index} onClick={toggleContent1}>
                  <div className="mainimage">
                    <figure>
                      <img src={`${'http://localhost:8000'+product.product_image}`} alt="Product" />
                      <figcaption>
                        {product.product_name}<br />
                        &#8377;{product.price}
                      </figcaption>
                    </figure>
                  </div>
                  {showContent1 && (
                    <div className='showcontent'>
                      <p ><a href="/CartPage" className='addtocart'>Add to Cart</a></p>
                      <p>{product.about_product}</p>
                      <div className='images'>
                        <div className='fourimages'>
                          <img src={`${'http://localhost:8000'+product.top_view}`} alt='fourimages'></img>
                          <img src={`${'http://localhost:8000'+product.right_side_view}`} alt='fourimages'></img>
                          <img src={`${'http://localhost:8000'+product.left_side_view}`} alt='fourimages'></img>
                          <video src={`${'http://localhost:8000'+product.video}`} width="100"  controls autoplay muted className="freshvideo"></video>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div>
              {product3 && product3.map((product, index) => (
                <div key={index} onClick={toggleContent2}>
                  <div className="mainimage">
                    <figure>
                      <img src={`${'http://localhost:8000'+product.product_image}`} alt="Product" />
                      <figcaption>
                        {product.product_name}<br />
                        &#8377;{product.price}
                      </figcaption>
                    </figure>
                  </div>
                  {showContent2 && (
                    <div className='showcontent'>
                      <p ><a href="/CartPage" className='addtocart'>Add to Cart</a></p>
                      <p>{product.about_product}</p>
                      <div className='images'>
                        <div className='fourimages'>
                          <img src={`${'http://localhost:8000'+product.top_view}`} alt='fourimages'></img>
                          <img src={`${'http://localhost:8000'+product.right_side_view}`} alt='fourimages'></img>
                          <img src={`${'http://localhost:8000'+product.left_side_view}`} alt='fourimages'></img>
                          <video src={`${'http://localhost:8000'+product.video}`}  width="100" controls autoplay muted className="freshvideo"></video>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>

    </div>
  )
}

export default Fresh;
