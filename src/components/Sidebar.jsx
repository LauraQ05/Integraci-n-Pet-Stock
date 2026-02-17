import React from 'react';

const Sidebar = () => {
  // Arreglo de navegación para fácil escalabilidad
  const menuItems = [
    { name: 'Home', icon: 'fas fa-th-large' },
    { name: 'Compra', icon: 'fas fa-file-invoice-dollar', active: true },
    { name: 'Inventario', icon: 'fas fa-boxes' },
    { name: 'Cliente', icon: 'fas fa-users' }
  ];

  return (
    <nav className="sidebar">
      <div className="sidebar-header"><i className="fas fa-paw"></i> Pet Stock</div>
      <ul className="nav-links">
        {menuItems.map((item, index) => (
          <li key={index} className={item.active ? 'active' : ''}>
            <i className={item.icon}></i> {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;