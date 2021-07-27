import { useContext } from 'react';
import { Row } from 'react-bootstrap';
import TimerContext from '../Contexts/TimerContext';

/** function generating the text to be displayed above the clock
 * @param {string} props is a text to be displayed
 * @returns {Node} representing component
 */
function ClockComment() {
  const { initialTime, timeLeft } = useContext(TimerContext);
  /** function generating the message.
   * It calculates what part of an initial time has already passed
   * and depending on the progress, generates appropriate message
   * @returns {string} containing the message */
  function generateMessage() {
    const progress = (initialTime - timeLeft) / initialTime;
    if (progress < 0.25) {
      return 'Long way to go!';
    }
    if (progress < 0.5) {
      return 'Getting close to a halfway point!';
    }
    if (progress < 0.75) {
      return 'More than halfway there!';
    }
    if (progress < 1) {
      return 'Almost there!';
    }
    if (progress === 1) {
      return 'Ring ring!';
    }
  }
  const message = generateMessage();
  return (
    <Row xs={1} className="justify-content-center m-auto">
      <p className="fs-5 fst-italic text-center">{message}</p>
    </Row>
  );
}

export default ClockComment;
