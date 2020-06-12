import React from 'react';
import { IoMdCloseCircle } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../store/actions/actions';

export default function ModalHeader() {
  const { totalCount } = useSelector((state) => state.cartReducer);
  const { isCartModal, searchProducts } = useSelector(
    (state) => state.modalReducer
  );

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <header className="modal__header" data-testid="modal__header">
      <button className="modal__close-modal" type="button">
        <IoMdCloseCircle
          className="modal__close-icon"
          onClick={handleCloseModal}
        />
      </button>
      {isCartModal ? (
        <h3 className="modal__title">
          Carrinho <span>({totalCount})</span>
        </h3>
      ) : (
        <h3 className="modal__title">
          Busca encontrada: <span>{searchProducts.length}</span>
        </h3>
      )}
    </header>
  );
}
