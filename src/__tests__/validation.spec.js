/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-canvas-mock';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { store } from '../store';
import App from '../container/App';
import Home from '../container/Home';
import Products from '../container/Products';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Search from '../components/Search';
import ModalHeader from '../components/Modal/ModalHeader';
import Modal from '../components/Modal';
import Cart from '../components/Cart';

import productsMock from './mocks/productsMock.json';
import cartListMock from './mocks/cartListMock.json';

const history = createMemoryHistory();

describe('Fashionista', () => {
  describe('Containers data-testid match', () => {
    it('should render the container <App/>', () => {
      const { getByTestId } = render(
        <Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </Provider>
      );

      const container = getByTestId('app');
      expect(container).toBeDefined();
    });

    it('should render the container <Home/>', () => {
      const { getByTestId } = render(
        <Provider store={store}>
          <Router history={history}>
            <Home />
          </Router>
        </Provider>
      );
      const container = getByTestId('card');
      expect(container).toBeDefined();
    });

    it('should render the container <Product/>', () => {
      const { getByTestId } = render(
        <Provider store={store}>
          <Router history={history}>
            <Products />
          </Router>
        </Provider>
      );
      const container = getByTestId('products');
      expect(container).toBeDefined();
    });
  });

  describe('Components data-testid match', () => {
    it('should render the component <Header/>', () => {
      const { getByTestId } = render(
        <Provider store={store}>
          <Router history={history}>
            <Header />
          </Router>
        </Provider>
      );
      const container = getByTestId('header');
      expect(container).toBeDefined();
    });

    it('should render the component <Footer/>', () => {
      const { getByTestId } = render(
        <Provider store={store}>
          <Router history={history}>
            <Footer />
          </Router>
        </Provider>
      );
      const container = getByTestId('footer');
      expect(container).toBeDefined();
    });

    it('should render the component <Loading/>', () => {
      const { getByTestId } = render(
        <Provider store={store}>
          <Router history={history}>
            <Loading />
          </Router>
        </Provider>
      );
      const container = getByTestId('loading');
      expect(container).toBeDefined();
    });

    it('should render the component <Error/>', () => {
      const { getByTestId } = render(
        <Provider store={store}>
          <Router history={history}>
            <Error />
          </Router>
        </Provider>
      );
      const container = getByTestId('error');
      expect(container).toBeDefined();
    });
  });

  it('should render the component <Search/>', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router history={history}>
          <Search />
        </Router>
      </Provider>
    );
    const container = getByTestId('search');
    expect(container).toBeDefined();
  });

  it('should render the component <ModalHeader/>', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router history={history}>
          <ModalHeader />
        </Router>
      </Provider>
    );
    const container = getByTestId('modal__header');
    expect(container).toBeDefined();
  });

  it('should render the component <Modal/>', () => {
    const products = productsMock;
    const { getByTestId } = render(
      <Provider store={store}>
        <Router history={history}>
          <Modal productToCart={products} />
        </Router>
      </Provider>
    );
    const container = getByTestId('modal');
    expect(container).toBeDefined();
  });

  it('should render the component <Cart/>', () => {
    const cartList = cartListMock;
    const { getByTestId } = render(
      <Provider store={store}>
        <Router history={history}>
          <Cart cartList={cartList} />
        </Router>
      </Provider>
    );
    const container = getByTestId('cart');
    expect(container).toBeDefined();
  });
});
