import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FaSearch } from 'react-icons/fa';
import { IoIosCart } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import {
  toggleCartModal,
  searchProductRequest,
} from '../../store/actions/actions';
import logo from '../../assets/images/logo.png';

import './Header.css';

export default function Header() {
  const { totalCount } = useSelector((state) => state.cartReducer);
  const { isCartModal, isSearchModal } = useSelector(
    (state) => state.modalReducer
  );

  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  const handleCartModal = () => {
    dispatch(toggleCartModal(!isCartModal));
  };

  const handleSearch = (event) => {
    dispatch(searchProductRequest(event.target.value));
    setSearch(event.target.value);
  };

  useEffect(() => {
    if (!isSearchModal) {
      setSearch('');
    }
  }, [isSearchModal]);

  return (
    <header className="header" data-testid="header">
      <div className="header__wrapper">
        <Link to="/">
          <img className="header__logo" src={logo} alt="logo" />
        </Link>

        <div className="header__input-wrapper">
          <input
            className="header__input"
            type="text"
            placeholder="busque por produtos"
            value={search}
            onChange={handleSearch}
            id="search"
          />

          <FaSearch className="header__icon" />

          <button
            onClick={handleCartModal}
            type="button"
            className="header__cart-counter"
          >
            <IoIosCart className="header__icon--cart" />
            {totalCount && <h3 className="header__count">{totalCount}</h3>}
          </button>
        </div>
      </div>
    </header>
  );
}
