import { Row } from 'react-bootstrap';

/** function generating a timer clock
 * @returns {Node} representing the component
 */
function Clock() {
  const clockStyle = { fontSize: '15vw' };
  return (
    <Row xs={1} className="justify-content-center m-auto my-0">
      <p className="text-center fw-bold my-0" style={{ fontSize: '15vw' }}>23:12</p>
    </Row>
  );
}

export default Clock;
