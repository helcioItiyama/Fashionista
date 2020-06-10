import React from 'react';
import { useSelector } from 'react-redux';

export default function Search() {
  const { searchProducts } = useSelector((state) => state.modalReducer);

  return (
    <>
      {searchProducts.length > 0 ? (
        searchProducts.map((product) => (
          // eslint-disable-next-line react/no-array-index-key
          <section className="modal__section" key={product.sizes[0].sku}>
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
              </div>

              <div className="modal__price">
                <div className="modal__price-wrapper">
                  <p>{product.actual_price}</p>
                  <p className="modal__installments">{product.installments}</p>
                </div>
              </div>
            </div>
          </section>
        ))
      ) : (
        <section className="modal__section">
          <h2 className="modal__empty">Nenhum item encontrado :(</h2>
        </section>
      )}
    </>
  );
}
