import { Button, Image } from 'react-bootstrap';
import { useContext } from 'react';
import pauseButton from '../assets/pause.png';
import playButton from '../assets/play.png';
import TimerContext from '../Contexts/TimerContext';

/** function generating a pause/play button
 * @returns {Node} representing the component
 */
function PausePlayButton() {
  const {
    resumeTimer,
    stopTimer,
    timeLeft,
    isTimerActive
  } = useContext(TimerContext);
  /** function
   * @returns {null}.
   */
  function handleClick() {
    if (timeLeft === 0) {
      return;
    }
    // eslint-disable-next-line no-unused-expressions
    isTimerActive ? stopTimer() : resumeTimer();
  }
  return (
    <Button variant='light' className="rounded-circle p-0">
      <Image
        src={isTimerActive ? pauseButton : playButton}
        className="w-100 p-0 m-auto d-block"
        // eslint-disable-next-line max-len
        onClick={handleClick}
      />
    </Button>
  );
}

export default PausePlayButton;
