import { FC } from 'react';
import './index.scss';

interface IProps {
  onClick?: () => void;
  isChecked?: boolean;
}

const ToggleButton: FC<IProps> = ({ isChecked, onClick }) => {
  return (
    <div
      title="Visible"
      className={`toggle-button ${isChecked ? 'checked' : ''}`}
      onClick={onClick}
    >
      <div className={`slider ${isChecked ? 'active' : ''}`}></div>
    </div>
  );
};

export default ToggleButton;
