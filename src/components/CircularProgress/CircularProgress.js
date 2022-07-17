import Spinner from 'react-bootstrap/Spinner';

function CircularProgress() {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default CircularProgress;