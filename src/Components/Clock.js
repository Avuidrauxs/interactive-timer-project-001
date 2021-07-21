import { Row } from 'react-bootstrap';

/** function generating a timer clock
 * @returns {Node} representing the component
 */
function Clock() {
  return (
    <Row className="justify-content-center m-auto">
      <p className="text-center fw-bold" style={{ fontSize: '10em' }}>23:12</p>
    </Row>
  );
}

export default Clock;
