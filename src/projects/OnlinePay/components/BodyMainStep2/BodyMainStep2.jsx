import React from 'react';
import styles from './BodyMainStep2.module.sass';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BodyMainStep2 = props => {
  const { dispatchActiveStep } = props;

  return (
    <div className={styles.body_main_step2}>
      <Form>
        <Form.Group controlId="formRadio">
          <Form.Check
            id="pay_once"
            name="pay"
            inline
            label="一次付款"
            type="radio"
          />
          <Form.Check
            id="pay_multi"
            name="pay"
            inline
            label="分期付款"
            type="radio"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>信用卡號：</Form.Label>
          {/* <Form.Group> */}
          <Row>
            <Col>
              <Form.Control type="email" />
            </Col>
            <Col className={styles.divide_line}>
              <Form.Text>-</Form.Text>
            </Col>
            <Col>
              <Form.Control type="email" />
            </Col>
            <Col className={styles.divide_line}>
              <Form.Text>-</Form.Text>
            </Col>
            <Col>
              <Form.Control type="email" />
            </Col>
            <Col className={styles.divide_line}>
              <Form.Text>-</Form.Text>
            </Col>
            <Col>
              <Form.Control type="email" />
            </Col>
          </Row>
          {/* </Form.Group> */}
        </Form.Group>

        <Form.Group>
          <Form.Label>有效月年：</Form.Label>
          <Row>
            <Col>
              <Form.Control as="select" placeholder="選擇">
                {Array.from({ length: 12 }, (_, index) => (
                  <option key={index}>{index + 1}</option>
                ))}
              </Form.Control>
            </Col>
            <Col className={styles.divide_line}>
              <Form.Text style={{ fontSize: '1.23rem' }}>/</Form.Text>
            </Col>
            <Col>
              <Form.Control as="select" placeholder="選擇">
                {Array.from({ length: 12 }, (_, index) => (
                  <option key={index}>{index + 2019}</option>
                ))}
              </Form.Control>
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
          <Form.Control className={styles.last_three_number} type="text" />
        </Form.Group>

        <Form.Group>
          <Form.Label>填寫付款人信箱</Form.Label>
          <Form.Control type="email" />
        </Form.Group>

        <Form.Group>
          <Form.Check type="checkbox" id="check_confirm">
            <Form.Check.Input type="checkbox" />
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
            <Form.Control.Feedback type="valid">
              You did it!
            </Form.Control.Feedback>
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
          <Button
            className={styles.button}
            onClick={() => dispatchActiveStep('INCREMENT')}
          >
            確認付款
          </Button>
        </div>

        {/* <Button variant="primary" type="submit">
          Submit
        </Button> */}
      </Form>
    </div>
  );
};

export default BodyMainStep2;
