import img from './error.gif';
import { Link } from 'react-router-dom';
const ErrorMessage = () => {
  return (
    <div>
      
      <img
      style={{
        display: 'block',
        width: '250px',
        height: '250px',
        objectFit: 'contain',
        margin: '0 auto',
      }}
      src={img}
      alt='Error'
    />
    </div>
    
  );
};

export default ErrorMessage;
