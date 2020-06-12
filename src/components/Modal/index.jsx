import React from 'react';

import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import './Modal.css';

import ModalHeader from './ModalHeader';
import Search from '../Search';
import Cart from '../Cart';

export default function Modal({ productToCart }) {
  const { totalPrice } = useSelector((state) => state.cartReducer);
  const { isCartModal, isSearchModal } = useSelector(
    (state) => state.modalReducer
  );

  return (
    <article className="modal" data-testid="modal">
      <div className="modal__wrapper">
        <ModalHeader />

        <main className="modal__section-wrapper">
          {isCartModal && <Cart cartList={productToCart} />}
          {isSearchModal && <Search />}
        </main>

        {isCartModal && (
          <footer className="modal__footer">
            <h3 className="modal__total-value">Total: {totalPrice}</h3>
          </footer>
        )}
      </div>
    </article>
  );
}

Modal.defaultProps = {
  productToCart: [],
};

Modal.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  productToCart: PropTypes.array,
};
