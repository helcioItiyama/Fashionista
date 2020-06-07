import React from 'react';

import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from 'react-icons/fa';

import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        Copyright 2020 @ Fashionista - Brasil - Todos os direitos reservados
      </p>

      <div>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare className="footer__icons footer__icons--facebook" />
        </a>

        <a
          href="https://twitter.com/login?lang=pt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitterSquare className="footer__icons footer__icons--twitter" />
        </a>

        <a
          href="https://www.instagram.com/?hl=pt-br"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare className="footer__icons footer__icons--instagram" />
        </a>
      </div>
    </footer>
  );
}
