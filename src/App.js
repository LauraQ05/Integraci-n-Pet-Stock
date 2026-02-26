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

function App() {
  // --- 1. ESTADOS (Deben estar adentro de la función App) ---
  const [cliente, setCliente] = useState({ cedula: '', nombre: '', correo: '', telefono: '' });
  const [articulos, setArticulos] = useState([{ id: Date.now(), nombre: '', precio: 0 }]);
  const [usaDomicilio, setUsaDomicilio] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // --- 2. LÓGICA DE INTEGRACIÓN (También adentro de App) ---
  const handleProcesarVenta = async (e) => {
    e.preventDefault();

    // Calculamos el total
    const totalArticulos = articulos.reduce((acc, art) => acc + parseFloat(art.precio || 0), 0);
    const totalFinal = usaDomicilio ? totalArticulos + 10000 : totalArticulos;

    const datosVenta = {
      cliente: {
        nombre: cliente.nombre,
        cedula: cliente.cedula
      },
      total: totalFinal
    };

    try {
      // Verifica que diga http, no https. Y que el puerto sea 5000.
       const respuesta = await fetch('http://localhost:5001/api/procesar-compra', { 
      method: 'POST',
       headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datosVenta),
      });

      if (respuesta.ok) {
        setShowModal(true); // Ahora sí encontrará setShowModal porque está en el mismo nivel
      } else {
        alert("Error al guardar en la base de datos.");
      }
    } catch (error) {
      console.error("Error de conexión:", error);
      alert("Asegúrate de que el Backend esté corriendo en el puerto 5000");
    }
  };

  // --- 3. RENDERIZADO ---
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <Header />
        <form onSubmit={handleProcesarVenta}>
          <ClienteForm cliente={cliente} setCliente={setCliente} />
          <ArticulosContainer articulos={articulos} setArticulos={setArticulos} />

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

          {usaDomicilio && <DomicilioSection />}
          <ResumenCompra articulos={articulos} tieneDomicilio={usaDomicilio} />

          <div className="form-actions">
            <CustomButton type="submit" label="Procesar Venta" icon="check-circle" variant="success" />
            <CustomButton type="button" label="Imprimir" icon="print" variant="primary" onClick={() => window.print()} />
            <CustomButton type="button" label="Limpiar" icon="eraser" variant="reset" onClick={() => window.location.reload()} />
          </div>
        </form>
      </main>

      {showModal && <SuccessModal close={() => setShowModal(false)} nombre={cliente.nombre} />}
    </div>
  );
} 

export default App;