import React from 'react';
import { IoMdCloseCircle } from 'react-icons/io';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import './Modal.css';
import { closeModal } from '../../store/actions/actions';
import productReducer from '../../store/reducers/productReducer';

export default function Modal({ productToCart }) {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const { productAmount, index } = useSelector((state) => state.productReducer);

  return (
    <article className="modal">
      <div className="modal__wrapper">
        <header className="modal__header">
          <button className="modal__close-modal" type="button">
            <IoMdCloseCircle
              className="modal__close-icon"
              onClick={handleCloseModal}
            />
          </button>
          <h3 className="modal__title">
            Carrinho <span>(15)</span>
          </h3>
        </header>

        <main className="modal__section-wrapper">
          {productToCart &&
            productToCart.map((product, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <section className="modal__section" key={i}>
                <div className="modal__section-border">
                  {product.image ? (
                    <img
                      className="modal__image"
                      src={product.image}
                      alt="clothes"
                    />
                  ) : (
                    <img
                      className="modal__image"
                      src="https://placehold.it/470x595?text=PRODUTO%20SEM%20FOTO"
                      alt={product.name}
                    />
                  )}

                  <div className="modal__info">
                    <p className="modal__product-name">{product.name}</p>
                    <p>Tam: P</p>
                    <div className="modal__count-button">
                      <button className="modal__remove" type="button">
                        -
                      </button>
                      {console.log(productAmount)}
                      {i === index && (
                        <div className="modal__count">{productAmount}</div>
                      )}
                      <button className="modal__add" type="button">
                        +
                      </button>
                    </div>
                  </div>

                  <div className="modal__price">
                    <div className="modal__price-wrapper">
                      <p>{product.regular_price}</p>
                      <p className="modal__installments">3x R$ 49,00</p>
                    </div>

                    <button className="modal__button" type="button">
                      Remover Item
                    </button>
                  </div>
                </div>
              </section>
            ))}
        </main>
        <footer className="modal__footer">
          <h3 className="modal__total-value">Total: R$ 1.900,00</h3>
        </footer>
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
