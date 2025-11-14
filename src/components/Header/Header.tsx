import './Header.css';

export const Header = () => {
  return (
    <div className="header">
      <h1>
        <svg className="title-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
        </svg>
        MarkDown Converter
      </h1>
      <p className="subtitle">
        Transform any document into clean, readable Markdown format instantly
      </p>
      <div className="features">
        <div className="feature">
          <span className="feature-icon">⚡</span>
          <span>Instant conversion</span>
        </div>
        <div className="feature">
          <span className="feature-icon">🔒</span>
          <span>Secure & private</span>
        </div>
        <div className="feature">
          <span className="feature-icon">📱</span>
          <span>Multiple formats</span>
        </div>
      </div>
    </div>
  );
};
