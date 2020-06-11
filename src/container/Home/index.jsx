/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { FaTag } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../../components/Header';
import Loading from '../../components/Loading';
import Footer from '../../components/Footer';
import { getProducts } from '../../store/actions/actions';
import Modal from '../../components/Modal';

import './Home.css';

export default function Home() {
  const { store, isError } = useSelector((state) => state.dataReducer);

  const { productToCart } = useSelector((state) => state.cartReducer);
  const { isCartModal, isSearchModal } = useSelector(
    (state) => state.modalReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (store.length > 0 && !isError) {
      return;
    }
    dispatch(getProducts());
  }, [dispatch, isError, store]);

  return (
    <>
      <Header />

      {(isCartModal || isSearchModal) && (
        <Modal productToCart={productToCart} />
      )}

      <main className="container card">
        {store.length > 0 ? (
          store.map((item, index) => (
            <Link
              key={item.sizes.sku}
              to={`/products/${index}`}
              className="card__link"
            >
              <article className="card__container">
                {item.discount_percentage !== '' && (
                  <>
                    <FaTag className="card__tag" />
                    <span className="card__deal">
                      -{item.discount_percentage}
                    </span>
                  </>
                )}

                {item.image ? (
                  <img
                    className="card__image"
                    src={item.image}
                    alt={item.name}
                  />
                ) : (
                  // eslint-disable-next-line jsx-a11y/img-redundant-alt
                  <img
                    className="card__image--notfound"
                    src="https://placehold.it/470x595?text=PRODUTO%20SEM%20FOTO"
                    alt="image not found"
                  />
                )}

                <div className="card__footer">
                  <h3 className="card__title">{item.name}</h3>
                  <p className="card__price">
                    {item.regular_price !== item.actual_price && (
                      <span className="card__price--discount">
                        {item.regular_price}
                      </span>
                    )}
                    {item.actual_price}
                  </p>
                </div>
              </article>
            </Link>
          ))
        ) : !isError ? (
          <Loading />
        ) : (
          <div>Erro no banco de dados</div>
        )}
      </main>
      <Footer />
    </>
  );
}
