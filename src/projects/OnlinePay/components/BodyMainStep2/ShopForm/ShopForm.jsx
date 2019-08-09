import React from 'react';
import styles from './ShopForm.module.sass';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { Formik } from 'formik';
import * as yup from 'yup';

const schema = yup.object({
  shop: yup.string().required('必填'),
  email: yup
    .string()
    .required('必填')
    .email('請輸入正確 E-mail 格式'),
  isConfirm: yup.bool().oneOf([true], '請確認')
});

const ShopForm = props => {
  const { dispatchActiveStep } = props;

  const shops = [
    {
      Text: '選擇',
      Value: ''
    },
    {
      Text: '7-11',
      Value: 1
    },
    {
      Text: '全家',
      Value: 2
    },
    {
      Text: '萊爾富',
      Value: 3
    },
    {
      Text: 'OK',
      Value: 4
    }
  ];

  return (
    <Formik
      validationSchema={schema}
      onSubmit={value => {
        console.log(value);
        dispatchActiveStep('INCREMENT');
      }}
      initialValues={{
        shop: '',
        email: '',
        isConfirm: false
      }}
    >
      {({
        handleSubmit,
        handleChange,
        // handleBlur,
        values,
        touched,
        isValid,
        errors
      }) => (
        <div className={styles.shop_form}>
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>付款超商：</Form.Label>
              <Form.Control
                as="select"
                placeholder="選擇"
                className={styles.select}
                name="shop"
                value={values.shop}
                onChange={handleChange}
                isValid={isValid}
                isInvalid={touched.shop && !!errors.shop}
              >
                {shops.map(item => {
                  const { Text, Value } = item;
                  return (
                    <option key={Value} value={Value}>
                      {Text}
                    </option>
                  );
                })}
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.shop && errors.shop}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label>填寫付款人信箱：</Form.Label>
              <Form.Control
                className={styles.select}
                name="email"
                value={values.email}
                onChange={handleChange}
                isValid={isValid}
                isInvalid={touched.email && !!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Check
                required
                id="check_confirm"
                feedback={errors.isConfirm}
              >
                <Form.Check.Input
                  type="checkbox"
                  name="isConfirm"
                  onChange={handleChange}
                  value={values.isConfirm}
                  isValid={isValid}
                  isInvalid={touched.isConfirm && !!errors.isConfirm}
                />
                <Form.Check.Label>
                  <span>
                    請再次確認「訂單資訊」與「付款資訊」，付款完成後將發送通知信至您的E-mail
                    信箱
                  </span>
                  <br />
                  <span style={{ color: '#AFAFAF', fontSize: '0.8rem' }}>
                    第三方支付金流服務條款
                  </span>
                </Form.Check.Label>
              </Form.Check>
            </Form.Group>

            <div className={styles.body_actions}>
              <Button
                variant="outline-primary"
                className={styles.button}
                onClick={() => dispatchActiveStep('DECREMENT')}
              >
                回上一步
              </Button>
              <Button type="submit" className={styles.button}>
                確認付款
              </Button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default ShopForm;
