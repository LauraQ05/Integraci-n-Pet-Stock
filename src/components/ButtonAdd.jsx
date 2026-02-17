import React from 'react';

const ButtonAdd = ({ articulos, setArticulos }) => {
  const addRow = () => {
    // Agrega un nuevo objeto vacío al estado de artículos
    setArticulos([...articulos, { id: Date.now(), nombre: '', precio: 0 }]);
  };

  return (
    <button type="button" onClick={addRow} className="icon-add" style={{border: 'none', background: 'none', cursor: 'pointer'}}>
      <i className="fas fa-plus-circle"></i>
    </button>
  );
};

export default ButtonAdd;