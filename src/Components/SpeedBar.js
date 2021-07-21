import { Row } from 'react-bootstrap';
import CustomButton from './CustomButton';

/** function generating a bar with buttons to choose countdown speed
 * @returns {Node} representing the component
 */
function SpeedBar() {
  return (
    <Row xs={1} md={3} className="justify-content-center m-auto">
      <CustomButton variant="secondary">1X</CustomButton>
      <CustomButton>1.5X</CustomButton>
      <CustomButton>2X</CustomButton>
    </Row>
  );
}

export default SpeedBar;
