import React from 'react';
import { Link } from 'react-router-dom';
import banner1 from '../images/main-banner-1.jpg';
import catbanner1 from '../images/catbanner-01.jpg';
import catbanner2 from '../images/catbanner-02.jpg';
import catbanner3 from '../images/catbanner-03.jpg';
import catbanner4 from '../images/catbanner-04.jpg';
import service1 from '../images/service.png';
import service2 from '../images/service-02.png';
import service3 from '../images/service-03.png';
import service4 from '../images/service-04.png';
import service5 from '../images/service-05.png';
import products from '../products/Products';

const Home = () => {
  return (
    <>
     <section className="home-wrapper-1 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img src={banner1} className='img-fluid rounded-3' alt="banner1" />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From $999.00 or $41.62/mo. <br />for 24 mo. Footnote*</p>
                <Link className='button' to='#'>BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img src={catbanner1} className='img-fluid rounded-3' alt="banner1" />
                <div className="small-banner-content position-absolute">
                  <h4>BEST SALE</h4>
                  <h5>Laptops Max</h5>
                  <p>From $1699.00 or <br />$64.62/mo.</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img src={catbanner3} className='img-fluid rounded-3' alt="banner1" />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>Buy iPad Air</h5>
                  <p>From $599.00 or <br />$49.91/mo. for 12 mo.*</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img src={catbanner2} className='img-fluid rounded-3' alt="banner1" />
                <div className="small-banner-content position-absolute">
                  <h4>15% OFF</h4>
                  <h5>Smartwatch 7</h5>
                  <p>Shop the latest brand <br />styles and colors.</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img src={catbanner4} className='img-fluid rounded-3' alt="banner1" />
                <div className="small-banner-content position-absolute">
                  <h4>FREE ENGRAVING</h4>
                  <h5>AirPods Max</h5>
                  <p>High-fidelity playback & <br />ultra-low distortion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     </section>
     <section className='home-wrapper-2 py-5'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              <div className='d-flex align-items-center gap-15'>
                <img src={service1} alt="services" />
                <div>
                  <h6>Free Shipping</h6>
                  <p className='mb-0'>From all orders over $100</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-15'>
                <img src={service2} alt="services" />
                <div>
                  <h6>Daily Surprise Offers</h6>
                  <p className='mb-0'>Save up to 25% off</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-15'>
                <img src={service3} alt="services" />
                <div>
                  <h6>Support 24/7</h6>
                  <p className='mb-0'>Shop with an expert</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-15'>
                <img src={service4} alt="services" />
                <div>
                  <h6>Affordable Prices</h6>
                  <p className='mb-0'>Get Factory direct price</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-15'>
                <img src={service5} alt="services" />
                <div>
                  <h6>Secure Payments</h6>
                  <p className='mb-0'>100% protected payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     </section>
     <section className='home-wrapper-2 .py-5'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex flex-wrap justify-content-between align-items-center">
              {
                products.map((product, index) => (
                  <div className='d-flex gap-30 align-items-center'>
                    <div>
                      <h6 key={index}>{product.heading}</h6>
                      <p key={index}>{product.count}</p> 
                    </div>
                    <img key={index} src={product.image} alt={product.alt} />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
     </section>
    </>
  )
}

export default Home;