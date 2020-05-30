/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { FaTag } from 'react-icons/fa';

import Headers from '../../components/Header';
import Footer from '../../components/Footer';

import './Products.css';

export default function Products() {
  return (
    <>
      <Headers />
      <main className="container product">
        <section className="product__detail">
          <img
            className="product__image"
            src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002584_035_catalog_1.jpg"
            alt="product"
          />
        </section>

        <section className="product__info">
          <div className="product__card">
            <FaTag className="product__tag" />
            <span className="product__deal">-5%</span>
            <h2 className="product__name">VESTIDO CURTO FESTIVAL</h2>
            <h3 className="product__color">Cor da roupa</h3>
            <p className="product__price">
              R$ 150,00{' '}
              <span className="product__installments">em até 3x R$ 49,97</span>
            </p>
            <p className="product__normal-price">R$ 190,00</p>
            <form>
              <p className="product__form-title">Escolha o tamanho</p>
              <input
                id="pp"
                className="product__input"
                type="radio"
                name="size"
                value="PP"
              />
              <label className="product__option" htmlFor="pp">
                PP
              </label>

              <input
                id="p"
                className="product__input"
                type="radio"
                name="size"
                value="P"
              />
              <label className="product__option" htmlFor="p">
                P
              </label>

              <input
                id="m"
                className="product__input"
                type="radio"
                name="size"
                value="M"
              />
              <label className="product__option" htmlFor="m">
                M
              </label>

              <input
                id="g"
                className="product__input"
                type="radio"
                name="size"
                value="G"
              />
              <label className="product__option" htmlFor="g">
                G
              </label>

              <input
                id="gg"
                className="product__input"
                type="radio"
                name="size"
                value="GG"
              />
              <label className="product__option" htmlFor="gg">
                GG
              </label>
            </form>

            <button className="product__button" type="button">
              Adicione ao Carrinho
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
