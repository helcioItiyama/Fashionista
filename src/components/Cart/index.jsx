import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import {
  incrementCounterRequest,
  decrementCounterRequest,
  removeProductRequest,
} from '../../store/actions/actions';

export default function Cart({ cartList }) {
  const dispatch = useDispatch();

  const toggleIncrementCounter = (id) => {
    dispatch(incrementCounterRequest(id));
  };

  const toggleDecrementCounter = (id) => {
    dispatch(decrementCounterRequest(id));
  };

  const handleRemoveProduct = (id) => {
    dispatch(removeProductRequest(id));
  };

  return (
    <>
      {cartList.length > 0 ? (
        cartList.map(
          ({
            id,
            installments,
            product,
            count,
            size,
            formattedTotalProductPrice,
            formattedTotalInstallment,
          }) => (
            // eslint-disable-next-line react/no-array-index-key
            <section className="modal__section" key={id}>
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
                  <p>Tam: {size}</p>
                  <div className="modal__count-button">
                    <button
                      className="modal__remove"
                      type="button"
                      onClick={() => toggleDecrementCounter(id)}
                    >
                      -
                    </button>
                    <div className="modal__count">{count}</div>

                    <button
                      className="modal__add"
                      type="button"
                      onClick={() => toggleIncrementCounter(id)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="modal__price">
                  <div className="modal__price-wrapper">
                    <p>{formattedTotalProductPrice}</p>
                    <p className="modal__installments">
                      {installments}x {formattedTotalInstallment}
                    </p>
                  </div>

                  <button
                    className="modal__button"
                    type="button"
                    onClick={() => handleRemoveProduct(id)}
                  >
                    Remover Item
                  </button>
                </div>
              </div>
            </section>
          )
        )
      ) : (
        <section className="modal__section">
          <h2 className="modal__empty">Seu carrinho está vazio :(</h2>
        </section>
      )}
    </>
  );
}

Cart.defaultProps = {
  cartList: [],
};

Cart.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  cartList: PropTypes.array,
};
