import React from 'react';

const SuccessModal = ({ close, nombre }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <i className="fas fa-check-circle" style={{fontSize: '3em', color: 'var(--success-color)'}}></i>
        <h2>¡Venta Exitosa!</h2>
        <p>La transacción del cliente <strong>{nombre}</strong> ha sido procesada correctamente.</p>
        <button onClick={close} className="btn-submit">Aceptar</button>
      </div>
    </div>
  );
};

export default SuccessModal;