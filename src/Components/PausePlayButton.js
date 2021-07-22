import { Button, Image } from 'react-bootstrap';
import pauseButton from '../assets/pause.png';
import playButton from '../assets/play.png';

/** function generating a pause/play button
 * @returns {Node} representing the component
 */
function PausePlayButton({ play = false }) {
  return (
    <Button variant='light' className="rounded-circle p-0">
      <Image
        src={play ? playButton : pauseButton}
        className="w-100 p-0 m-auto d-block"
      />
    </Button>
  );
}

export default PausePlayButton;
