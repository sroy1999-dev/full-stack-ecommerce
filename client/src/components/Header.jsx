import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import compare from '../images/compare.svg';
import wishlist from '../images/wishlist.svg';
import user from '../images/user.svg';
import cart from '../images/cart.svg';
import menu from '../images/menu.svg';

const Header = () => {
  return (
    <div className='entral'>
     <header className="header-top-strip py-3">
      <div className="container-xxl">
        <div className="row">
          <div className="col-6">
            <p className='text-white mb-0'>Free shipping over $100 & free returns</p>
          </div>
          <div className="col-6">
            <p className='text-end text-white mb-0'>
              Hotline:{" "}
              <a className='text-white' href="tel:+91 7609815319">+91 7609815319</a>
            </p>
          </div>
        </div>
      </div>
     </header>
     <header className="header-upper py-3">
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-2">
            <h2>
              <Link className='text-white' to='/'>Digitic.</Link>
            </h2>
          </div>
          <div className="col-5">
            <div className="input-group">
              <input type="text" className="form-control py-2" placeholder="Search product here" aria-label="Search product here" aria-describedby="basic-addon2" />
              <span className="input-group-text" id="basic-addon2">
                <BsSearch className='fs-6' />
              </span>
            </div>
          </div>
          <div className="col-5">
            <div className="header-upper-links d-flex align-items-center justify-content-between">
              <div>
                <Link className='d-flex align-items-center gap-10 text-white' to='/'>
                  <img src={compare} alt="compare" />
                  <p className='mb-0'>Compare <br /> Products</p>
                </Link>
              </div>
              <div>
                <Link className='d-flex align-items-center gap-10 text-white' to='/'>
                  <img src={wishlist} alt="wishlist" />
                  <p className='mb-0'>Favourite <br /> Wishlist</p>
                </Link>
              </div>
              <div>
                <Link className='d-flex align-items-center gap-10 text-white' to='/'>
                  <img src={user} alt="user" />
                  <p className='mb-0'>Log In <br /> My Account</p>
                </Link>
              </div>
              <div>
                <Link className='d-flex align-items-center gap-10 text-white' to='/'>
                  <img src={cart} alt="cart" />
                  <div className='d-flex flex-column gap-10'>
                    <span className="badge bg-white text-dark">0</span>
                    <p className='mb-0'>$500</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
     </header>
     <header className="header-bottom py-3">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className='menu-bottom d-flex align-items-center gap-30'>
              <div>
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={menu} alt="menu" />
                    <span className='me-5 d-inline-block'>Shop categories</span>
                  </button>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item text-white" to="#">Action</Link></li>
                    <li><Link className="dropdown-item text-white" to="#">Another action</Link></li>
                    <li><Link className="dropdown-item text-white" to="#">Something else here</Link></li>
                  </ul>
                </div>
              </div>
              <div className='menu-links'>
                <div className='d-flex align-items-center gap-15'>
                  <NavLink className='text-white' to='/'>Home</NavLink>
                  <NavLink className='text-white' to='/'>Our store</NavLink>
                  <NavLink className='text-white' to='/about'>Blogs</NavLink>
                  <NavLink className='text-white' to='/contact'>Contact</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     </header>
    </div>
  )
}

export default Header;