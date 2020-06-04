/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { FaTag } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Headers from '../../components/Header';
import Footer from '../../components/Footer';

import './Products.css';

export default function Products() {
  const store = useSelector((state) => state.payload);
  const { index } = useParams();

  const product = store[index];

  if (!product) {
    throw new Error('produto não encontrado');
  }

  return (
    <>
      <Headers />
      <main className="container product">
        <section className="product__detail">
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
        </section>

        <section className="product__info">
          <div className="product__card">
            {product.discount_percentage && (
              <>
                <FaTag className="product__tag" />
                <span className="product__deal">
                  {product.discount_percentage}
                </span>
              </>
            )}
            <h2 className="product__name">{product.name}L</h2>
            <h3 className="product__color">{product.color_slug}</h3>
            <p className="product__price">
              {product.regular_price}
              <span className="product__installments">
                {product.installments}
              </span>
            </p>
            <p className="product__normal-price">{product.actual_price}</p>
            <form>
              <p className="product__form-title">Escolha o tamanho</p>
              {product.sizes &&
                product.sizes.map((item) => (
                  <>
                    <input
                      id={item.sku}
                      className="product__input"
                      type="radio"
                      name="size"
                      value={item.size}
                    />
                    <label className="product__option" htmlFor={item.size}>
                      {item.size}
                    </label>
                  </>
                ))}
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
