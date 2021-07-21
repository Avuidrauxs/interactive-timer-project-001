import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import InputBar from './Components/InputBar';
import SpeedBar from './Components/SpeedBar';
import Clock from './Components/Clock';

/** This function renders the entire app
 * @returns {Node} containing the app
 */
function App() {
  return (
    <Col xs={12} md={6} className="m-auto">
      <Row xl={2}>
        <InputBar />
      </Row>
      <Row>
        <Clock />
      </Row>
      <Row>
        <SpeedBar />
      </Row>
    </Col>
  );
}

export default App;
