import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/images/12512-orange-error.json';

import './Error.css';

export default function Error() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preservedAspectRadio: 'xMidyMid slice',
    },
  };
  return (
    <div data-testid="error">
      <div className="error">
        Ops...alguma coisa deu errado. Tente mais tarde, novamente!
      </div>
      <Lottie options={defaultOptions} height={300} width={300} />
    </div>
  );
}
