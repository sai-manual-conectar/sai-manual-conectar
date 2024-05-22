import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const MultiDropdown = () => {
  return (
    <div className="multi-dropdown w-100 mb-3">
      <DropdownButton id="dropdown-basic-button "  variant="success" title="Selecciona una unidad">
        <Dropdown drop="right" >
          <Dropdown.Toggle variant="white" id="dropdown-unidad1">
            Unidad 1
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="1-1">Actividad 1</Dropdown.Item>
            <Dropdown.Item eventKey="1-2">Actividad 2</Dropdown.Item>
            <Dropdown.Item eventKey="1-2">Actividad 3</Dropdown.Item>

          </Dropdown.Menu>
        </Dropdown>
        <Dropdown drop="right">
          <Dropdown.Toggle variant="white" id="dropdown-unidad2">
            Unidad 2
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="2-1">Actividad 4</Dropdown.Item>
            <Dropdown.Item eventKey="2-1">Actividad 5</Dropdown.Item>
            <Dropdown.Item eventKey="2-1">Actividad 6</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown drop="right">
          <Dropdown.Toggle variant="white" id="dropdown-unidad2">
            Unidad 3
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="2-1">Actividad 7</Dropdown.Item>
            <Dropdown.Item eventKey="2-1">Actividad 8</Dropdown.Item>
            <Dropdown.Item eventKey="2-1">Actividad 9</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </DropdownButton>
    </div>
  );
};

export default MultiDropdown;
