import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
import InputBar from './Components/InputBar';

/** This function renders the entire app
 * @returns {Node} containing the app
 */
function App() {
  return (
    <Row md={3}>
      <InputBar />
    </Row>
  );
}

export default App;
