import { Button, Image } from 'react-bootstrap';
import { useContext, useState } from 'react';
import pauseButton from '../assets/pause.png';
import playButton from '../assets/play.png';
import TimerContext from '../Contexts/TimerContext';

/** function generating a pause/play button
 * @returns {Node} representing the component
 */
function PausePlayButton() {
  const [play, setPlay] = useState(false);
  const { resumeTimer, stopTimer } = useContext(TimerContext);
  return (
    <Button variant='light' className="rounded-circle p-0">
      <Image
        src={play ? playButton : pauseButton}
        className="w-100 p-0 m-auto d-block"
        // eslint-disable-next-line max-len
        onClick={play ? () => { resumeTimer(); setPlay(false); } : () => { stopTimer(); setPlay(true); }}
      />
    </Button>
  );
}

export default PausePlayButton;
