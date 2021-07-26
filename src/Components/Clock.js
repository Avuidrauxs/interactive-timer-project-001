import { Row } from 'react-bootstrap';
import { useContext } from 'react';
import TimerContext from '../Contexts/TimerContext';

/** function generating a timer clock
 * @returns {Node} representing the component
 */
function Clock() {
  const { timeLeft } = useContext(TimerContext);
  const clockStyle = { fontSize: '10vw' };
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  return (
    <Row xs={1} className="justify-content-center m-auto my-0">
      <p className="text-center fw-bold my-0" style={clockStyle}>
        {hours < 10 && 0}{hours}:
        {minutes < 10 && 0}{minutes}:
        {seconds < 10 && 0}{seconds}
      </p>
    </Row>
  );
}

export default Clock;
