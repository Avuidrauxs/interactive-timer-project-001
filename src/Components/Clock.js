import { Row } from 'react-bootstrap';
import { useContext } from 'react';
import { ReactFitty } from 'react-fitty';
import TimerContext from '../Contexts/TimerContext';

/** function generating a timer clock
 * @returns {Node} representing the component
 */
function Clock() {
  const { timeLeft } = useContext(TimerContext);
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  return (
    <Row xs={1} className="justify-content-center m-auto my-0">
      <ReactFitty>
        {hours < 10 && 0}{hours}:
        {minutes < 10 && 0}{minutes}:
        {seconds < 10 && 0}{seconds}
      </ReactFitty>
    </Row>
  );
}

export default Clock;
