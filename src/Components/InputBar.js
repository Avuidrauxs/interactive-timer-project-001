/* eslint-disable max-len */
import { useState, useContext } from 'react';
// eslint-disable-next-line object-curly-newline
import { Form, Row, Button, Alert } from 'react-bootstrap';
import TimerContext from '../Contexts/TimerContext';

/** function generating an input bar
 * @returns {Node} representing the input bar
 */
function InputBar() {
  const [input, setInput] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const { setUserInput } = useContext(TimerContext);
  /** function validating the user input.
   * @param {string} value represents user input
   * @returns {boolean} informing if the input is valid
  */
  function validate(value) {
    if (value === '') {
      return false;
    }
    const numValue = parseInt(value, 10);
    if (Number.isNaN(numValue) || numValue < 0 || numValue > 1380) {
      return false;
    }
    return true;
  }
  /** function handling the click and setting the current
   * value of user input as userInput in global context
   * @returns {null}. */
  function submit() {
    const isValid = validate(input);
    if (isValid) {
      setShowWarning(false);
      setUserInput(input);
    } else {
      setShowWarning(true);
    }
  }
  return (
    <>
      <Row xs={1} className="justify-content-center m-auto">
        <Form className="d-flex flex-row align-items-center">
          <Form.Label className="my-0 fw-bold">Countdown:</Form.Label>
          <Form.Control
            className="mx-2 rounded-0 border-2 border-secondary"
            type="input"
            placeholder="(Min)"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            className="rounded-0 bg-success border-0"
            onClick={submit}
          >
            START
          </Button>
        </Form>
      </Row>
      {showWarning
        && <Alert variant="warning" className="mt-2">
          Your input is invalid. Input field must not be empty and you can only input numbers between 0 and 1380 (1380 minutes = 23 hours).
        </Alert>
      }
    </>
  );
}

export default InputBar;
