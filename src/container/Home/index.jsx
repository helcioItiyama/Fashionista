import React from 'react';
import { FaTag } from 'react-icons/fa';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';

import './Home.css';

export default function Home() {
  return (
    <>
      <Header />

      <Modal />

      <main className="container card">
        <article className="card__container">
          <FaTag className="card__tag" />
          <span className="card__deal">-8%</span>
          <img
            className="card__image"
            src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002584_035_catalog_1.jpg"
            alt=""
          />
          <div className="card__footer">
            <h3 className="card__title">Nome da roupa</h3>
            <p className="card__price">
              <span className="card__price--discount">R$240,00</span> R$ 200,00
            </p>
          </div>
        </article>

        <article className="card__container">
          <img
            className="card__image"
            src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002584_035_catalog_1.jpg"
            alt=""
          />
          <div className="card__footer">
            <h3 className="card__title">Nome da roupa</h3>
            <p className="card__price">
              <span className="card__price--discount">R$240,00</span> R$ 200,00
            </p>
          </div>
        </article>

        <article className="card__container">
          <img
            className="card__image"
            src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002584_035_catalog_1.jpg"
            alt=""
          />
          <div className="card__footer">
            <h3 className="card__title">Nome da roupa</h3>
            <p className="card__price">
              <span className="card__price--discount">R$240,00</span> R$ 200,00
            </p>
          </div>
        </article>

        <article className="card__container">
          <img
            className="card__image"
            src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002584_035_catalog_1.jpg"
            alt=""
          />
          <div className="card__footer">
            <h3 className="card__title">Nome da roupa</h3>
            <p className="card__price">
              <span className="card__price--discount">R$240,00</span> R$ 200,00
            </p>
          </div>
        </article>

        <article className="card__container">
          <img
            className="card__image"
            src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002584_035_catalog_1.jpg"
            alt=""
          />
          <div className="card__footer">
            <h3 className="card__title">Nome da roupa</h3>
            <p className="card__price">
              <span className="card__price--discount">R$240,00</span> R$ 200,00
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
