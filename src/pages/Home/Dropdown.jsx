import React, { useState } from 'react';
import Home from './Home';
import PropTypes from 'prop-types';


const DropdownItem = ({ item, onItemClick, isSelected, children }) => {
  return (
    <li className={isSelected ? 'selected' : ''} onClick={() => onItemClick(item)}>
      {item}
      {isSelected && <div>{children}</div>}
    </li>
  );
};

DropdownItem.propTypes = {
  item: PropTypes.string.isRequired,
  onItemClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  children: PropTypes.string,
};


const Dropdown = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    if (selectedItem === item) {
      setSelectedItem(null);
    } else {
      setSelectedItem(item);
    }
  };

  return (
    <div>
      <ul>
        <DropdownItem
          item='Hoy'
          onItemClick={handleItemClick}
          isSelected={selectedItem === 'Hoy'}
        >
            Información adicional para Esta semana
        </DropdownItem>

        <DropdownItem
          item='Esta semana'
          onItemClick={handleItemClick}
          isSelected={selectedItem === 'Esta semana'}
        >
          Información adicional para Esta semana
        </DropdownItem>

        <DropdownItem
          item="Este Mes"
          onItemClick={handleItemClick}
          isSelected={selectedItem === 'Este Mes'}
        >
          Información adicional para Este Mes
        </DropdownItem>
      </ul>
    </div>
  );
};

export default Dropdown;
