import { Row } from 'react-bootstrap';

/** function generating a timer clock
 * @returns {Node} representing the component
 */
function Clock() {
  return (
    <Row xs={1} className="justify-content-center m-auto my-0">
      {/* <p className="text-center fs-5 my-0 fst-italic">More than halfway there!</p> */}
      <p className="text-center fw-bold my-0" style={{ fontSize: '15vw' }}>23:12</p>
      {/* <svg style={{ width: '100%', height: '300' }}>
        <text
          fontWeight="bold"
          fontSize="15vw"
          x="0"
          y="80%"
          textLength="100%"
          lengthAdjust="spacing"
        >
          23:12
        </text>
      </svg> */}
    </Row>
  );
}

export default Clock;
