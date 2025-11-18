import './Switch.css';

interface SwitchProps {
  isChecked: boolean;
  onChange: () => void;
  leftLabel: string;
  rightLabel: string;
}

export const Switch = ({ isChecked, onChange, leftLabel, rightLabel }: SwitchProps) => {
  return (
    <div className="switch-container">
      <span className={`switch-label ${!isChecked ? 'active' : ''}`}>
        {leftLabel}
      </span>
      <button 
        className={`switch ${isChecked ? 'checked' : ''}`}
        onClick={onChange}
        type="button"
      >
        <span className="switch-thumb" />
      </button>
      <span className={`switch-label ${isChecked ? 'active' : ''}`}>
        {rightLabel}
      </span>
    </div>
  );
};
