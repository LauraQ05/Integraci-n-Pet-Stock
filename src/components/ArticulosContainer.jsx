import React from 'react';
import ButtonAdd from './ButtonAdd';

const ArticulosContainer = ({ articulos, setArticulos }) => {
  
  // Actualiza un artículo específico dentro del arreglo
  const updateItem = (id, field, value) => {
    const newItems = articulos.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    );
    setArticulos(newItems);
  };

  return (
    <div className="articulos-section">
      <h3 style={{color: 'var(--primary-color)'}}>
        Artículos y Servicios 
        <ButtonAdd setArticulos={setArticulos} articulos={articulos} />
      </h3>
      
      {articulos.map((art) => (
        <div key={art.id} className="form-grid articulo-fila">
          <div className="input-group">
            <label>Descripción *</label>
            <input 
              type="text" 
              placeholder="Ej: Baño Canino"
              onChange={(e) => updateItem(art.id, 'nombre', e.target.value)} 
            />
          </div>
          <div className="input-group">
            <label>Precio Unitario *</label>
            <input 
              type="number" 
              placeholder="0"
              onChange={(e) => updateItem(art.id, 'precio', e.target.value)} 
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticulosContainer;