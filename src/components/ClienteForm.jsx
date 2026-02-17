import React, { useEffect } from 'react';

const ClienteForm = ({ cliente, setCliente }) => {
  
  // Función para capturar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente({ ...cliente, [name]: value });
  };

  // Lógica de autocompletado si el cliente ya existe
  useEffect(() => {
    if (cliente.cedula === '12345678901') {
      setCliente(prev => ({
        ...prev,
        nombre: "Cliente VIP Laura",
        correo: "vip@laura.com",
        telefono: "3105554433"
      }));
    }
  }, [cliente.cedula, setCliente]);

  return (
    <div className="form-grid">
      <div className="input-group">
        <label>Cédula cliente *</label>
        <input name="cedula" type="text" value={cliente.cedula} onChange={handleChange} required />
      </div>
      <div className="input-group">
        <label>Nombre completo *</label>
        <input name="nombre" type="text" value={cliente.nombre} onChange={handleChange} required />
      </div>
      <div className="input-group">
        <label>Correo electrónico *</label>
        <input name="correo" type="email" value={cliente.correo} onChange={handleChange} required />
      </div>
      <div className="input-group">
        <label>Teléfono *</label>
        <input name="telefono" type="text" value={cliente.telefono} onChange={handleChange} required />
      </div>
    </div>
  );
};

export default ClienteForm;