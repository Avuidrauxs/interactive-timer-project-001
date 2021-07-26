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
  const { startTimer } = useContext(TimerContext);
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
      startTimer(input);
    } else {
      setShowWarning(true);
    }
  }
  /** function handling the live input. It will set showWarning to false whenever input changes to ''
   * and block user from inputting anything else than numbers
   * @returns {null}.
   * @param {string} userInput is a value that user wants to set in the input field.
   */
  function handleInput(userInput) {
    const re = /\D/;
    if (re.test(userInput)) {
      return;
    }
    if (userInput === '') {
      setShowWarning(false);
    }
    setInput(userInput);
  }
  return (
    <>
      <Row xs={1} className="justify-content-center m-auto">
        <Form className="d-flex flex-row align-items-center">
          <Form.Label className="my-0 fw-bold">Countdown:</Form.Label>
          <Form.Control
            className="mx-2 rounded-0 border-2 border-secondary"
            type="input"
            placeholder="0-1380"
            value={input}
            onChange={(e) => handleInput(e.target.value)}
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
