import React from 'react';

/**
 * Componente de encabezado reutilizable.
 * Muestra el logo y el nombre de la marca de forma consistente.
 */
const Header = () => {
  return (
    <header className="header-main">
      <div className="header-logo">
        <i className="fas fa-paw"></i> 
        <span>PET STOCK - Gestión de Servicios</span>
      </div>
    </header>
  );
};

export default Header;