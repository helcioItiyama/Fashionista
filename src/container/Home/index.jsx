import React, { useEffect } from 'react';
import { FaTag } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getProducts } from '../../actions';
// import Modal from '../../components/Modal';

import './Home.css';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getApi = async () => {
      const response = await fetch(
        'https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog'
      );
      const json = await response.json();
      dispatch(getProducts(json));
    };
    getApi();
  }, [dispatch]);

  const store = useSelector((state) => state.payload);

  return (
    <>
      <Header />

      {/* <Modal /> */}

      <main className="container card">
        {store &&
          store.map((item, index) => (
            <Link
              key={item.name}
              to={`/products/${index}`}
              className="card__link"
            >
              <article className="card__container">
                {item.discount_percentage !== '' && (
                  <>
                    <FaTag className="card__tag" />
                    <span className="card__deal">
                      {item.discount_percentage}
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
          ))}
      </main>

      <Footer />
    </>
  );
}
