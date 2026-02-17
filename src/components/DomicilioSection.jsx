import React from 'react';

//Componente para la sección de domicilio, se renderiza condicionalmente desde App.js
const DomicilioSection = () => {
  return (
    <fieldset className="domicilio-fields">
      <legend><i className="fas fa-map-marked-alt"></i> Datos de Envío (Recargo $10.000)</legend>
      <div className="form-grid">
        <div className="input-group">
          <label>Dirección *</label>
          <input type="text" required />
        </div>
        <div className="input-group">
          <label>Barrio *</label>
          <input type="text" required />
        </div>
        <div className="input-group">
          <label>Horario</label>
          <select>
            <option>Mañana (8am - 12pm)</option>
            <option>Tarde (2pm - 6pm)</option>
          </select>
        </div>
      </div>
    </fieldset>
  );
};

export default DomicilioSection;