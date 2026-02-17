import React from 'react';

const ResumenCompra = ({ articulos, tieneDomicilio }) => {
  // Suma los precios de todos los artículos en el arreglo
  const subtotal = articulos.reduce((acc, curr) => acc + (Number(curr.precio) || 0), 0);
  const total = tieneDomicilio ? subtotal + 10000 : subtotal;

  return (
    <div className="resumen-box">
      <h4>Resumen de Cobro</h4>
      <p>Subtotal: <span>${subtotal.toLocaleString()}</span></p>
      {tieneDomicilio && <p>Domicilio: <span>$10,000</span></p>}
      <hr />
      <h3>Total a Pagar: ${total.toLocaleString()}</h3>
    </div>
  );
};

export default ResumenCompra;