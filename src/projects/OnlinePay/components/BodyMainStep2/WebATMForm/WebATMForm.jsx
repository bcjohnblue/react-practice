import React from 'react';
import styles from './WebATMForm.module.sass';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { Formik } from 'formik';
import * as yup from 'yup';

const schema = yup.object({
  atm: yup.string().required('必填'),
  email: yup
    .string()
    .required('必填')
    .email('請輸入正確 E-mail 格式'),
  isConfirm: yup.bool().oneOf([true], '請確認')
});

const WebATMForm = props => {
  const { dispatchActiveStep } = props;

  const atms = [
    {
      Text: '選擇',
      Value: ''
    },
    {
      Text: '聯邦銀行',
      Value: 1
    },
    {
      Text: '台新銀行',
      Value: 2
    },
    {
      Text: '玉山銀行',
      Value: 3
    },
    {
      Text: '華南銀行',
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
        atm: '',
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
        <div className={styles.web_atm_form}>
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>付款銀行：</Form.Label>
              <Form.Control
                as="select"
                placeholder="選擇"
                className={styles.select}
                name="atm"
                value={values.atm}
                onChange={handleChange}
                isValid={isValid}
                isInvalid={touched.atm && !!errors.atm}
              >
                {atms.map(item => {
                  const { Text, Value } = item;
                  return (
                    <option key={Value} value={Value}>
                      {Text}
                    </option>
                  );
                })}
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.atm && errors.atm}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label className={styles.prompt_text}>
                <span>1.</span>
                <span>
                  請準備晶片金融卡 +
                  晶片讀卡機，我們將引導您至指定金融機構之網路ATM進行交易手續。
                  (怎麼很像詐騙集團...)
                </span>
              </Form.Label>
              <Form.Label className={styles.prompt_text}>
                <span>2.</span>
                <span>
                  持對應機構之金融卡可享免跨行轉帳手續費，若無以上金融機構發行之金融卡，可自由選擇其一金融機構進行後續交易流程
                </span>
              </Form.Label>
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

export default WebATMForm;
