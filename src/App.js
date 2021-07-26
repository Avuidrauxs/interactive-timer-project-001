// eslint-disable-next-line object-curly-newline
import { useState, useEffect, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputBar from './Components/InputBar';
import SpeedBar from './Components/SpeedBar';
import Clock from './Components/Clock';
import PausePlayButton from './Components/PausePlayButton';
import ClockComment from './Components/ClockComment';
import TimerContext from './Contexts/TimerContext';

/** This function renders the entire app
 * @returns {Node} containing the app
 */
function App() {
  const [userInput, setUserInput] = useState('');
  const [timeLeft, setTimeLeft] = useState(0);
  const myInterval = useRef();
  /**
   * @returns {null}.
   */
  function stopTimer() {
    if (myInterval.current !== undefined) {
      clearInterval(myInterval.current);
    }
  }
  /**
   * @returns {null}.
   */
  function resumeTimer() {
    myInterval.current = setInterval(() => {
      setTimeLeft((curValue) => curValue - 1);
    }, 1000);
  }
  /**
   * @returns {null}.
   */
  function startTimer() {
    setTimeLeft(userInput);
    resumeTimer();
  }
  useEffect(() => {
    if (userInput !== '') {
      stopTimer();
      startTimer();
    }
  }, [userInput]);
  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    if (timeLeft === 0) {
      stopTimer();
    }
  }, [timeLeft]);
  return (
    <TimerContext.Provider value={{
      userInput,
      setUserInput,
      timeLeft,
      startTimer,
      resumeTimer,
      stopTimer
    }}>
      <Col xs={11} md={6} className="m-auto my-4 my-xl-5">
        <Row>
          <Col xs={12} md={10} className="m-auto ms-md-0">
            <InputBar />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs={12} md={10}>
            <ClockComment text="More than halfway there!"/>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={10}>
            <Clock />
          </Col>
          <Col xs={2} md={2} className="d-flex m-auto justify-content-center p-3 p-md-2 p-xl-3">
            <PausePlayButton />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={10}>
            <SpeedBar />
          </Col>
        </Row>
      </Col>
    </TimerContext.Provider>
  );
}

export default App;
