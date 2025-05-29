import '../../styles/LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="loading" role="status" aria-label="Loading">
      <div className="loading-spinner">
        <div className="spinner-circle"></div>
        <div className="spinner-circle-dot"></div>
      </div>
      <div className="loading-text">
        <span>L</span>
        <span>o</span>
        <span>a</span>
        <span>d</span>
        <span>i</span>
        <span>n</span>
        <span>g</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;