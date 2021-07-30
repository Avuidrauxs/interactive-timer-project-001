import { useContext } from 'react';
import { Row } from 'react-bootstrap';
import CustomButton from './CustomButton';
import TimerContext from '../Contexts/TimerContext';

/** function generating a bar with buttons to choose countdown speed
 * @returns {Node} representing the component
 */
function SpeedBar() {
  const {
    timerSpeed,
    setTimerSpeed,
  } = useContext(TimerContext);
  const buttonsConfig = [
    {
      text: '1X',
      speed: 1,
    },
    {
      text: '1.5X',
      speed: 1.5,
    },
    {
      text: '2X',
      speed: 2,
    },
  ];
  /** this function sets the globally available (via TimerContext) stateful value timerSpeed
   * to equal speed corresponding to the clicked button
   * @param {number} speed is specific for each Button
   * @returns {null}.
   */
  function handleClick(speed) {
    setTimerSpeed(speed);
  }
  const buttonsDisplay = buttonsConfig.map((el, index) => <CustomButton
        key={index}
        onClick={() => handleClick(el.speed)}
        variant={el.speed === timerSpeed && 'secondary'}
      >
        {el.text}
      </CustomButton>);
  return (
    <Row xs={1} md={3} className="justify-content-center m-auto my-3">
      {buttonsDisplay}
    </Row>
  );
}

export default SpeedBar;
