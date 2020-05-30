import React from 'react';
import { IoMdCloseCircle } from 'react-icons/io';

import './Modal.css';

export default function Modal() {
  return (
    <article className="modal">
      <header className="modal__header">
        <button className="modal__close-modal" type="button">
          <IoMdCloseCircle className="modal__close-icon" />
        </button>
        <h3 className="modal__title">
          Carrinho <span>(15)</span>
        </h3>
      </header>

      <section className="modal__section">
        <div className="modal__section-border">
          <img
            className="modal__image"
            src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002584_035_catalog_1.jpg"
            alt="clothes"
          />
          <div className="modal__info">
            <p>Nome da roupa</p>
            <p>Tam: P</p>
            <div className="modal__count-button">
              <button className="modal__remove" type="button">
                -
              </button>
              <div className="modal__count">1</div>
              <button className="modal__add" type="button">
                +
              </button>
            </div>
          </div>
          <div className="modal__price">
            <div className="modal__price-wrapper">
              <p>R$ 149,00</p>
              <p className="modal__installments">3x R$ 49,00</p>
            </div>

            <button className="modal__button" type="button">
              Remover Item
            </button>
          </div>
        </div>
      </section>

      <section className="modal__section">
        <div className="modal__section-border">
          <img
            className="modal__image"
            src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002584_035_catalog_1.jpg"
            alt="clothes"
          />
          <div className="modal__info">
            <p>Nome da roupa</p>
            <p>Tam: P</p>
            <div className="modal__count-button">
              <button className="modal__remove" type="button">
                -
              </button>
              <div className="modal__count">1</div>
              <button className="modal__add" type="button">
                +
              </button>
            </div>
          </div>
          <div className="modal__price">
            <div className="modal__price-wrapper">
              <p>R$ 149,00</p>
              <p className="modal__installments">3x R$ 49,00</p>
            </div>

            <button className="modal__button" type="button">
              Remover Item
            </button>
          </div>
        </div>
      </section>

      <section className="modal__section">
        <div className="modal__section-border">
          <img
            className="modal__image"
            src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002584_035_catalog_1.jpg"
            alt="clothes"
          />
          <div className="modal__info">
            <p>Nome da roupa</p>
            <p>Tam: P</p>
            <div className="modal__count-button">
              <button className="modal__remove" type="button">
                -
              </button>
              <div className="modal__count">1</div>
              <button className="modal__add" type="button">
                +
              </button>
            </div>
          </div>
          <div className="modal__price">
            <div className="modal__price-wrapper">
              <p>R$ 149,00</p>
              <p className="modal__installments">3x R$ 49,00</p>
            </div>

            <button className="modal__button" type="button">
              Remover Item
            </button>
          </div>
        </div>
      </section>
      <footer className="modal__footer">
        <h3 className="modal__total-value">Total: R$ 1.900,00</h3>
      </footer>
    </article>
  );
}
