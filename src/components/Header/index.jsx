import React from 'react';
import { Link } from 'react-router-dom';

import { FaSearch } from 'react-icons/fa';
import { IoIosCart } from 'react-icons/io';
import { useSelector } from 'react-redux';
import logo from '../../assets/images/logo.png';

import './Header.css';

export default function Header() {
  const { productAmount } = useSelector((state) => state.cartReducer);

  return (
    <header className="header">
      <div className="header__wrapper">
        <Link to="/">
          <img className="header__logo" src={logo} alt="logo" />
        </Link>
        <div className="header__input-wrapper">
          <input
            className="header__input"
            type="text"
            placeholder="busque por produtos"
            id="search"
          />
          <FaSearch className="header__icon" />
          <Link to="/" className="header__cart-counter">
            <IoIosCart className="header__icon--cart" />
            {productAmount && (
              <h3 className="header__count">{productAmount}</h3>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
