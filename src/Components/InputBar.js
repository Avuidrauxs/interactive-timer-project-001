import { Form, Row, Button } from 'react-bootstrap';

/** function generating an input bar
 * @returns {Node} representing the input bar
 */
function InputBar() {
  return (
    <Row xs={1} md={1} className="justify-content-center m-auto">
      <Form className="d-flex flex-row align-items-center">
        <Form.Label className="my-0 fw-bold">Countdown:</Form.Label>
        <Form.Control className="mx-2 rounded-0 border-2 border-secondary" type="input" placeholder="(Min)" />
        <Button className="rounded-0 bg-success border-0">START</Button>
      </Form>
    </Row>
  );
}

export default InputBar;
