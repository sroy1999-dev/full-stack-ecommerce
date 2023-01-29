/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import newsletter from '../images/newsletter.png';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <>
     <footer className='py-5'>
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-5">
            <div className="footer-top-data d-flex gap-30 align-items-center">
              <img src={newsletter} alt="newsletter" />
              <h2 className='mb-0 text-white'>Sign up for Newsletter</h2>
            </div>
          </div>
          <div className="col-7">
            <div className="input-group">
              <input type="text" className="form-control py-1" placeholder="Your email address" aria-label="Your email address" aria-describedby="basic-addon2" />
              <button className="input-group-text p-2" id="basic-addon2">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
     </footer>
     <footer className='py-4'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-4">
            <h4 className='text-white mb-4'>Contact Us</h4>
            <div>
              <address className='text-white fs-6'>
                House no: 621 Lakshmikanth Nagar, <br/> Mysuru, Karnataka <br />
                Pincode: 570017
              </address>
              <a href='tel:+91 7609815319' className='mt-3 d-block mb-1 text-white'>+91 7609815319</a>
              <a href='mailto:roysuvam1999@gmail.com' className='mt-2 d-block mb-0 text-white'>roysuvam1999@gmail.com</a>
              <div className="social_icons d-flex align-items-center gap-30 mt-4">
                <a href="#">
                  <BsLinkedin className='text-white fs-4' />
                </a>
                <a href="#">
                  <BsGithub className='text-white fs-4' />
                </a>
                <a href="#">
                  <BsYoutube className='text-white fs-4' />
                </a>
                <a href="#">
                  <BsInstagram className='text-white fs-4' />
                </a>
              </div>
            </div>
          </div>
          <div className="col-3">
            <h4 className='text-white mb-4'>Information</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1' to='#'>Privacy policy</Link>
              <Link className='text-white py-2 mb-1' to='#'>Refund policy</Link>
              <Link className='text-white py-2 mb-1' to='#'>Shipping policy</Link>
              <Link className='text-white py-2 mb-1' to='#'>Terms of service</Link>
              <Link className='text-white py-2 mb-1' to='#'>Blogs</Link>
            </div>
          </div>
          <div className="col-3">
            <h4 className='text-white mb-4'>Account</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1' to='#'>Search</Link>
              <Link className='text-white py-2 mb-1' to='#'>About us</Link>
              <Link className='text-white py-2 mb-1' to='#'>Faq</Link>
              <Link className='text-white py-2 mb-1' to='#'>Contact</Link>
              <Link className='text-white py-2 mb-1' to='#'>Size chart</Link>
            </div>
          </div>
          <div className="col-2">
            <h4 className='text-white mb-4'>Quick Links</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1' to='#'>Accessories</Link>
              <Link className='text-white py-2 mb-1' to='#'>Laptops</Link>
              <Link className='text-white py-2 mb-1' to='#'>Headphones</Link>
              <Link className='text-white py-2 mb-1' to='#'>Tablets</Link>
              <Link className='text-white py-2 mb-1' to='#'>Watch</Link>
            </div>
          </div>
        </div>
      </div>
     </footer>
     <footer className='py-3'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className='text-center text-white'>&copy; {new Date().getFullYear()}; Powered by Digitic group</p>
          </div>
        </div>
      </div>
     </footer>
    </>
  )
}

export default Footer;