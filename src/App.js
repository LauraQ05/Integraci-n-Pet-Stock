import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ClienteForm from './components/ClienteForm';
import ArticulosContainer from './components/ArticulosContainer';
import DomicilioSection from './components/DomicilioSection';
import ResumenCompra from './components/ResumenCompra';
import Sidebar from './components/Sidebar';
import CustomButton from './components/CustomButton'; 
import SuccessModal from './components/SuccessModal';

/**
 * Componente principal Pet Stock.
 * Implementa la lógica de negocio y estados globales.
 */
function App() {
  // Estado para el cliente
  const [cliente, setCliente] = useState({ cedula: '', nombre: '', correo: '', telefono: '' });
  
  // Estado para la lista dinámica de artículos
  const [articulos, setArticulos] = useState([{ id: Date.now(), nombre: '', precio: 0 }]);
  
  // Booleano para el renderizado condicional de domicilio
  const [usaDomicilio, setUsaDomicilio] = useState(false);
  
  // Estado para mostrar/ocultar el modal de éxito
  const [showModal, setShowModal] = useState(false);

  const handleProcesarVenta = (e) => {
    e.preventDefault();
    setShowModal(true); 
  };

  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <Header />
        <form onSubmit={handleProcesarVenta}>
          {/* Componente de Datos Personales */}
          <ClienteForm cliente={cliente} setCliente={setCliente} />

          {/* Componente de Artículos Dinámicos */}
          <ArticulosContainer articulos={articulos} setArticulos={setArticulos} />

          {/* Checkbox para Domicilio */}
          <div className="domicilio-box">
            <label className="checkbox-container">
              <input 
                type="checkbox" 
                checked={usaDomicilio}
                onChange={(e) => setUsaDomicilio(e.target.checked)} 
              /> 
              <strong> ¿Incluir servicio de domicilio? (Recargo $10.000)</strong>
            </label>
          </div>

          {/* Renderizado Condicional del Componente DomicilioSection */}
          {usaDomicilio && <DomicilioSection />}

          {/* Componente de Cálculo en tiempo real */}
          <ResumenCompra articulos={articulos} tieneDomicilio={usaDomicilio} />

          <div className="form-actions">
            <CustomButton type="submit" label="Procesar Venta" icon="check-circle" variant="success" />
            <CustomButton type="button" label="Imprimir" icon="print" variant="primary" onClick={() => window.print()} />
            <CustomButton type="button" label="Limpiar" icon="eraser" variant="reset" onClick={() => window.location.reload()} />
          </div>
        </form>
      </main>

      {/* Alerta de confirmación */}
      {showModal && <SuccessModal close={() => setShowModal(false)} nombre={cliente.nombre} />}
    </div>
  );
}

export default App;