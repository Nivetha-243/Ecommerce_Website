import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import './todaydeals.css';

const TodayDeals = () => {
    const [product4, setProduct4] = useState(null);
    const [product5, setProduct5] = useState(null);
    const [product6, setProduct6] = useState(null);
    const [product7, setProduct7] = useState(null);
    const [product8, setProduct8] = useState(null);
    const product_ids = ["004", "005", "006", "007", "008"];
    const [showContent3, setShowContent3] = useState(false);
    const [showContent4, setShowContent4] = useState(false);
    const [showContent5, setShowContent5] = useState(false);
    const [showContent6, setShowContent6] = useState(false);
    const [showContent7, setShowContent7] = useState(false);




    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response4 = await axios.get('http://127.0.0.1:8000/api/products/' + product_ids[0] + '/get');
                const response5 = await axios.get('http://127.0.0.1:8000/api/products/' + product_ids[1] + '/get');
                const response6 = await axios.get('http://127.0.0.1:8000/api/products/' + product_ids[2] + '/get');
                const response7 = await axios.get('http://127.0.0.1:8000/api/products/' + product_ids[3] + '/get');
                const response8 = await axios.get('http://127.0.0.1:8000/api/products/' + product_ids[4] + '/get');

                setProduct4(response4.data);
                setProduct5(response5.data);
                setProduct6(response6.data);
                setProduct7(response7.data);
                setProduct8(response8.data);
                console.log(response4.data);

            } catch (error) {
                alert("Error fetching product data: " + error.message);
            }
        };
        fetchProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!product4 || !product5 || !product6 || !product7 || !product8) {
        return <div>Loading...</div>;
    }
    const toggleContent3 = () => {
        setShowContent3(!showContent3);
    };
    const toggleContent4 = () => {
        setShowContent4(!showContent4);
    };
    const toggleContent5 = () => {
        setShowContent5(!showContent5);
    };
    const toggleContent6 = () => {
        setShowContent6(!showContent6);
    };
    const toggleContent7 = () => {
        setShowContent7(!showContent7);
    };

    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <h2>Today Deals For You..</h2>
            </div>
            <div id='todayimages'>
                <div className='todayimages1'>
                    {product4 && product4.map((product, index) => (
                        <div key={index} onClick={toggleContent3}>
                            <div className='subimage'>
                                <figure>
                                    <img src={`${'http://localhost:8000'+product.product_image}`} alt='todayimages2'></img>
                                    <figcaption>
                                        <p>{product.product_name}</p>
                                        <p><span>50% Offer</span></p>
                                        <p>&#8377; {product.price}</p>
                                        <a href="/CartPage" className='addtocart'>Add to Cart</a>
                                    </figcaption>
                                </figure>
                            </div>
                            {showContent3 && (
                                <div className='showcontent'>
                                    <p>{product.about_product}</p>
                                    <div>
                                        <div className='todayimages2'>
                                        <img src={`${'http://localhost:8000'+product.top_view}`} alt='todayimages2'></img>
                                            <img src={`${'http://localhost:8000'+product.right_side_view}`} alt='todayimages2'></img>
                                            <img src={`${'http://localhost:8000'+product.left_side_view}`} alt='todayimages2'></img>
                                            <video src={`${'http://localhost:8000'+product.video}`} controls autoplay muted  width="100" className="freshvideo"></video>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className='todayimages1'>
                    {product7 && product7.map((product, index) => (
                        <div key={index} onClick={toggleContent4}>
                            <div className='subimage'>
                                <figure>
                                    <img src={`${'http://localhost:8000'+product.product_image}`} alt='todayimages2'></img>
                                    <figcaption>
                                        <p>{product.product_name}</p>
                                        <p><span>60% Offer</span></p>
                                        <p>&#8377; {product.price}</p>
                                        <a href="/CartPage" className='addtocart'>Add to Cart</a>
                                    </figcaption>
                                </figure>
                            </div>
                            {showContent4 && (
                                <div className='showcontent'>
                                    <p>{product.about_product}</p>
                                    <div>
                                        <div className='todayimages2'>
                                            <img src={`${'http://localhost:8000'+product.top_view}`} alt='todayimages2'></img>
                                            <img src={`${'http://localhost:8000'+product.right_side_view}`} alt='todayimages2'></img>
                                            <img src={`${'http://localhost:8000'+product.left_side_view}`} alt='todayimages2'></img>
                                            <video src={`${'http://localhost:8000'+product.video}`} controls autoplay muted  width="100" className="freshvideo"></video>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className='todayimages1'>
                    {product8 && product8.map((product, index) => (
                        <div key={index} onClick={toggleContent5}>
                            <div className='subimage'>
                                <figure>
                                    <img src={`${'http://localhost:8000'+product.product_image}`} alt='todayimages2'></img>
                                    <figcaption>
                                        <p>{product.product_name}</p>
                                        <p><span>30% Offer</span></p>
                                        <p>&#8377; {product.price}</p>
                                        <a href="/CartPage" className='addtocart'>Add to Cart</a>
                                    </figcaption>
                                </figure>
                            </div>
                            {showContent5 && (
                                <div className='showcontent'>
                                    <p>{product.about_product}</p>
                                    <div>
                                        <div className='todayimages2'>
                                        <img src={`${'http://localhost:8000'+product.top_view}`} alt='todayimages2'></img>
                                            <img src={`${'http://localhost:8000'+product.right_side_view}`} alt='todayimages2'></img>
                                            <img src={`${'http://localhost:8000'+product.left_side_view}`} alt='todayimages2'></img>
                                            <video src={`${'http://localhost:8000'+product.video}`} controls autoplay muted  width="100" className="freshvideo"></video>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className='todayimages1'>
                    {product5 && product5.map((product, index) => (
                        <div key={index} onClick={toggleContent6}>
                            <div className='subimage'>
                                <figure>
                                    <img src={`${'http://localhost:8000'+product.product_image}`} alt='todayimages2'></img>
                                    <figcaption>
                                        <p>{product.product_name}</p>
                                        <p><span>80% Offer</span></p>
                                        <p>&#8377; {product.price}</p>
                                        <a href="/CartPage" className='addtocart'>Add to Cart</a>
                                    </figcaption>
                                </figure>
                            </div>
                            {showContent6 && (
                                <div className='showcontent'>
                                    <p>{product.about_product}</p>
                                    <div>
                                        <div className='todayimages2'>
                                        <img src={`${'http://localhost:8000'+product.top_view}`} alt='todayimages2'></img>
                                            <img src={`${'http://localhost:8000'+product.right_side_view}`} alt='todayimages2'></img>
                                            <img src={`${'http://localhost:8000'+product.left_side_view}`} alt='todayimages2'></img>
                                            <video src={`${'http://localhost:8000'+product.video}`} controls autoplay muted  width="100" className="freshvideo"></video>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className='todayimages1'>
                    {product6 && product6.map((product, index) => (
                        <div key={index} onClick={toggleContent7}>
                            <div className='subimage'>
                                <figure>
                                    <img src={`${'http://localhost:8000'+product.product_image}`} alt='todayimages2'></img>
                                    <figcaption>
                                        <p>{product.product_name}</p>
                                        <p><span>20% Offer</span></p>
                                        <p>&#8377; {product.price}</p>
                                        <a href="/CartPage" className='addtocart'>Add to Cart</a>
                                    </figcaption>
                                </figure>
                            </div>
                            {showContent7 && (
                                <div className='showcontent'>
                                    <p>{product.about_product}</p>
                                    <div>
                                        <div className='todayimages2'>
                                        <img src={`${'http://localhost:8000'+product.top_view}`} alt='todayimages2'></img>
                                            <img src={`${'http://localhost:8000'+product.right_side_view}`} alt='todayimages2'></img>
                                            <img src={`${'http://localhost:8000'+product.left_side_view}`} alt='todayimages2'></img>
                                            <video src={`${'http://localhost:8000'+product.video}`} controls autoplay muted  width="100" className="freshvideo"></video>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <Footer />
            </div>

        </div>
    )
}

export default TodayDeals;
