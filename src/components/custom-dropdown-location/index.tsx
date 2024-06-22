import React, { useState } from 'react';
import './index.scss';

interface Location {
  location: string;
}

interface CustomDropdownProps {
  locations: Location[];
  handleChangeLocation: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ locations, handleChangeLocation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string>('');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (location: string) => {
    setSelectedLocation(location);
    setIsOpen(false);
    handleChangeLocation({ target: { value: location } } as React.ChangeEvent<HTMLSelectElement>);
  };

  return (
    <div className="custom-dropdown">
      <div
        className={`dropdown-header ${isOpen ? 'open' : ''}`}
        onClick={handleToggle}
      >
        {selectedLocation || 'Select Location'}
        <span className="arrow">{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
        <div className="dropdown-options">
          {locations?.length > 0 ? (
            locations?.map((location, i) => (
              <div
                key={i}
                className="dropdown-option"
                onClick={() => handleOptionClick(location.location)}
              >
                {location.location}
              </div>
            ))
          ) : (
            <div className="dropdown-option">No locations available</div>
          )}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
