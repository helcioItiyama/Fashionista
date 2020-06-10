/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { FaTag } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getProducts, addToCartRequest } from '../../store/actions/actions';

import Headers from '../../components/Header';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';

import './Products.css';

export default function Products() {
  const store = useSelector((state) => state.dataReducer);
  const { productToCart } = useSelector((state) => state.cartReducer);
  const { isCartModal, isSearchModal } = useSelector(
    (state) => state.modalReducer
  );

  const [selectedOption, setSelectedOption] = useState('');
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const { id } = useParams();
  const product = store.find((_, index) => index === Number(id));

  useEffect(() => {
    if (store.length > 0) {
      return;
    }
    dispatch(getProducts());
  }, [dispatch, store]);

  const handleInput = (event) => {
    return setSelectedOption(event.target.id);
  };

  const handleAddToCart = (event) => {
    if (selectedOption === '') {
      setError(true);
    } else {
      dispatch(addToCartRequest(selectedOption, product));
      setError(false);
    }
    event.preventDefault();
  };

  return (
    <>
      <Headers />

      {(isCartModal || isSearchModal) && (
        <Modal productToCart={productToCart} />
      )}

      {product && (
        <main className="container product">
          {/* <section className="product__detail"> */}
          {product.image ? (
            <img
              className="product__image"
              src={product.image}
              alt={product.name}
            />
          ) : (
            <img
              className="product__image"
              src="https://placehold.it/470x595?text=PRODUTO%20SEM%20FOTO"
              alt={product.name}
            />
          )}
          {/* </section> */}

          <section className="product__info">
            <div className="product__card">
              {product.discount_percentage && (
                <>
                  <FaTag className="product__tag" />
                  <span className="product__deal">
                    -{product.discount_percentage}
                  </span>
                </>
              )}
              <div>
                <h2 className="product__name">{product.name}</h2>
                <h3 className="product__color">Cor: {product.color_slug}</h3>
              </div>

              <p className="product__price">
                {product.actual_price}
                <span className="product__installments">
                  {product.installments}
                </span>
              </p>

              {product.regular_price !== product.actual_price && (
                <p className="product__normal-price">{product.regular_price}</p>
              )}
              <form onSubmit={handleAddToCart} className="product__form">
                <p className="product__form-title">Escolha o tamanho</p>
                <div className="product__input__options">
                  {product.sizes &&
                    product.sizes.map((item) => (
                      <>
                        {item.available === true && (
                          <>
                            <input
                              id={item.sku}
                              className="product__input"
                              onChange={handleInput}
                              type="radio"
                              name="size"
                              key={item.sku}
                              checked={selectedOption === item.sku}
                            />
                            <label
                              className="product__option"
                              htmlFor={item.sku}
                            >
                              {item.size}
                            </label>
                          </>
                        )}
                      </>
                    ))}
                </div>
                {error && (
                  <p className="product__error">
                    É necessário escolher um tamanho
                  </p>
                )}
                <button className="product__button" type="submit">
                  Adicione ao Carrinho
                </button>
              </form>
              <Link to="/" className="product__button">
                <h5>Voltar para página inicial</h5>
              </Link>
            </div>
          </section>
        </main>
      )}
      <Footer />
    </>
  );
}
