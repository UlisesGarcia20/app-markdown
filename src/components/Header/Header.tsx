// components/Header/Header.jsx
import './Header.css';

export const Header = () => {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <div className="topbar-brand">
          <span className="brand-icon-wrapper">
            <svg className="brand-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
            </svg>
          </span>
          <span className="brand-name">MarkConvert</span>
        </div>

      </div>
    </header>
  );
};
