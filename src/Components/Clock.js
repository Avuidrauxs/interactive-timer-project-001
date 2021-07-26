import { Row } from 'react-bootstrap';
import { useContext } from 'react';
import TimerContext from '../Contexts/TimerContext';

/** function generating a timer clock
 * @returns {Node} representing the component
 */
function Clock() {
  const { timeLeft } = useContext(TimerContext);
  const clockStyle = { fontSize: '15vw' };
  return (
    <Row xs={1} className="justify-content-center m-auto my-0">
      <p className="text-center fw-bold my-0" style={clockStyle}>{timeLeft}</p>
    </Row>
  );
}

export default Clock;
