/* eslint-disable max-len */
import { useState, useContext, useEffect } from 'react';
// eslint-disable-next-line object-curly-newline
import { Form, Row, Button, Alert } from 'react-bootstrap';
import TimerContext from '../Contexts/TimerContext';

/** function generating an input bar
 * @returns {Node} representing the input bar
 */
function InputBar() {
  const [input, setInput] = useState('');
  const [isValid, setIsValid] = useState(false);
  const { startTimer } = useContext(TimerContext);
  /** function validating the user input and updating the isValid stateful value accordingly.
   * @param {string} value represents user input
   * @returns {null}.
  */
  function validate(value) {
    if (value === '') {
      setIsValid(false);
      return;
    }
    const numValue = parseInt(value, 10);
    if (Number.isNaN(numValue) || numValue < 0 || numValue > 1380) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
  }
  /** function handling the click and starting the timer
   * with a value equal to current input
   * @returns {null}. */
  function submit() {
    if (isValid) {
      startTimer(input);
    }
  }
  /** function handling the live input. If user tries to input anything else than a digit,
   * the input stateful value, which controls the input field, is not set and therefore user
   * is effectively prevented from inputting characters other than digits.
   * @returns {null}.
   * @param {string} userInput is a value that user wants to set in the input field.
   */
  function handleInput(userInput) {
    const re = /\D/;
    if (re.test(userInput)) {
      return;
    }
    setInput(userInput);
  }
  // check if input is valid each time it's changed.
  useEffect(() => {
    validate(input);
  }, [input]);
  return (
    <>
      <Row xs={1} className="justify-content-center m-auto">
        <Form className="d-flex flex-row align-items-center">
          <Form.Label className="my-0 fw-bold">Countdown:</Form.Label>
          <Form.Control
            className="mx-2 rounded-0 border-2 border-secondary"
            type="input"
            placeholder="0-1380 minutes"
            value={input}
            onChange={(e) => handleInput(e.target.value)}
          />
          <Button
            className="rounded-0 bg-success border-0"
            onClick={submit}
            disabled={!isValid}
          >
            START
          </Button>
        </Form>
      </Row>
      {!isValid && input !== ''
        && <Alert variant="warning" className="mt-2">
          Your input is invalid. Input field must not be empty and you can only input numbers between 0 and 1380 (1380 minutes = 23 hours).
        </Alert>
      }
    </>
  );
}

export default InputBar;
