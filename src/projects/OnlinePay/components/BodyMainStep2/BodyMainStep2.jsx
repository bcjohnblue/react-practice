import React from 'react';
// import styles from './BodyMainStep2.module.sass';

import CreditCardForm from './CreditCardForm/CreditCardForm';
import ShopForm from './ShopForm/ShopForm';
import WebATMForm from './WebATMForm/WebATMForm';

const BodyMainStep2 = props => {
  const { dispatchActiveStep, payMethod } = props;
  const isMobile = window.matchMedia('(max-width: 992px)').matches;

  const Component = (() => {
    const mapPayMethodToComponet = {
      creditCart: CreditCardForm,
      unionPay: CreditCardForm,
      shop: ShopForm,
      webATM: WebATMForm,
      ATM: WebATMForm
    };

    if (isMobile) return CreditCardForm;
    return mapPayMethodToComponet[payMethod];
  })();

  return <Component dispatchActiveStep={dispatchActiveStep} />;
};

export default BodyMainStep2;
