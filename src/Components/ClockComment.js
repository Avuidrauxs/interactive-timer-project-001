import { Row } from 'react-bootstrap';

/** function generating the text to be displayed above the clock
 * @param {props}
 * @returns {Node} representing component
 */
function ClockComment(props) {
  return (
    <Row xs={1} className="justify-content-center m-auto">
      <p className="fs-5 fst-italic text-center">{props.text}</p>
    </Row>
  );
}

export default ClockComment;
