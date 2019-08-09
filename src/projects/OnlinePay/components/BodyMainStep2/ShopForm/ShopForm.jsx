import React from 'react';
import styles from './ShopForm.module.sass';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Formik } from 'formik';
import * as yup from 'yup';

const schema = yup.object({
  pay: yup.string().required('必填'),
  creditCart: yup.array().of(
    yup
      .string()
      .required('必填')
      .length(4, '請輸入4位數字 ')
  ),
  validTime: yup.object().shape({
    month: yup.string().required('必填'),
    year: yup.string().required('必填')
  }),
  lastNumber: yup
    .string()
    .required('必填')
    .length(3, '請輸入背面末三碼'),
  email: yup
    .string()
    .required('必填')
    .email('請輸入正確 E-mail 格式'),
  isConfirm: yup.bool().oneOf([true], '請確認')
});

const ShopForm = props => {
  const { dispatchActiveStep } = props;

  return (
    <Formik
      validationSchema={schema}
      onSubmit={value => {
        console.log(value);
        dispatchActiveStep('INCREMENT');
      }}
      initialValues={{
        pay: '',
        creditCart: Array.from({ length: 4 }, () => ''),
        validTime: {
          month: '',
          year: ''
        },
        lastNumber: '',
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
              <Form.Label>有效月年：</Form.Label>
              <Row>
                <Col>
                  <Form.Control
                    as="select"
                    placeholder="選擇"
                    name="validTime.month"
                    value={values.validTime.month}
                    onChange={handleChange}
                    isValid={isValid}
                    isInvalid={
                      touched.validTime &&
                      !!errors.validTime &&
                      !!errors.validTime.month
                    }
                  >
                    {Array.from({ length: 13 }, (_, index) => {
                      return index === 0 ? (
                        <option key={index} value={''}>
                          選擇
                        </option>
                      ) : (
                        <option key={index} value={index}>
                          {index}
                        </option>
                      );
                    })}
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.validTime && errors.validTime.month}
                  </Form.Control.Feedback>
                </Col>
                <Col className={styles.divide_line}>
                  <Form.Text style={{ fontSize: '1.23rem' }}>/</Form.Text>
                </Col>
                <Col>
                  <Form.Control
                    as="select"
                    placeholder="選擇"
                    name="validTime.year"
                    value={values.validTime.year}
                    onChange={handleChange}
                    isValid={isValid}
                    isInvalid={
                      touched.validTime &&
                      !!errors.validTime &&
                      !!errors.validTime.year
                    }
                  >
                    {Array.from({ length: 13 }, (_, index) => {
                      return index === 0 ? (
                        <option key={index} value={''}>
                          選擇
                        </option>
                      ) : (
                        <option key={index} value={index + 2018}>
                          {index + 2018}
                        </option>
                      );
                    })}
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.validTime && errors.validTime.year}
                  </Form.Control.Feedback>
                </Col>
                <Col className={styles.divide_line}>
                  <Form.Text style={{ fontSize: '1rem', marginLeft: '10px' }}>
                    年
                  </Form.Text>
                </Col>
              </Row>
            </Form.Group>

            <Form.Group>
              <Form.Label>背面末三碼</Form.Label>
              <Form.Control
                className={styles.last_three_number}
                type="text"
                name="lastNumber"
                maxLength={3}
                value={values.lastNumber}
                onChange={handleChange}
                isValid={isValid}
                isInvalid={touched.lastNumber && !!errors.lastNumber}
              />
              <Form.Control.Feedback type="invalid">
                {errors.lastNumber}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label>填寫付款人信箱</Form.Label>
              <Form.Control
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
            {/* onClick={() => dispatchActiveStep('INCREMENT')} */}
            {/* <Button variant="primary" type="submit">
            Submit
          </Button> */}
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default ShopForm;
