import React from 'react';
import './Navbar.css';

interface NavbarProps {
  hiddenFields: string[];
  pickedFields: string[];
  toggleField: (field: string) => void;
}

const mapFieldName = (field: string): string => {
  const mapping: { [key: string]: string } = {
    id: 'id',
    naziv: 'Naziv',
    klasifikacija: 'Klasifikacija',
    karakteristikaA: 'Karakteristika_a',
    karakteristikaB: 'Karakteristika_b',
    karakteristikaC: 'Karakteristika_c',
    karakteristikaD: 'Karakteristika_d',
    karakteristikaE: 'Karakteristika_e',
  };
  
  return mapping[field] || field.charAt(0).toUpperCase() + field.slice(1);
};

const Navbar: React.FC<NavbarProps> = ({ hiddenFields, pickedFields, toggleField  }) => {
  return (
    <div className="col-2 p-0">
        <div className="navbar-container">
          <div className="navbar-half bg-navbar">
            {hiddenFields.map((field) => (
              <button key={field} className="navbar-button hidden-field" onClick={() => toggleField(field)}>
                {mapFieldName(field)}
              </button>
            ))}
          </div>
          <div className="navbar-half bg-navbar">
            {pickedFields.map((field) => (
              <button key={field} className="navbar-button picked-field" onClick={() => toggleField(field)}>
                {mapFieldName(field)}
              </button>
            ))}
          </div>
        </div>
    </div>
  );
};

export default Navbar;