import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import InputBar from './Components/InputBar';
import SpeedBar from './Components/SpeedBar';
import Clock from './Components/Clock';
import PausePlayButton from './Components/PausePlayButton';
import ClockComment from './Components/ClockComment';

/** This function renders the entire app
 * @returns {Node} containing the app
 */
function App() {
  return (
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
  );
}

export default App;
