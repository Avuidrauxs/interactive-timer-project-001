import { Button } from 'react-bootstrap';

/** function generating a custom button
 * @returns {Node} representing the component
 */
function CustomButton({ children, variant = 'outline-secondary' }) {
  return (
    <Button variant={variant} className="w-auto px-4 mx-2 px-0 rounded-0 border border-2 border-dark">{children}</Button>
  );
}

export default CustomButton;
