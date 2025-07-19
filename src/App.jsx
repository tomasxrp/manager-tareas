import TarjetaTarea from "./components/TarjetaTarea"
import Tarea from "./Logica/Tarea"
import React from "react";
import NuevaTarea from "./components/NuevaTarea";
import { useState, useEffect } from "react";

function App() {
  
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  // Cargar tareas desde localStorage al inicializar
  const [tareas, setTareas] = useState(() => {
    const tareasGuardadas = localStorage.getItem('tareas');
    if (tareasGuardadas) {
      const tareasJSON = JSON.parse(tareasGuardadas);
      // Convertir objetos planos a instancias de Tarea
      return tareasJSON.map(tarea => new Tarea(
        tarea.nombre,
        tarea.descripcion,
        tarea.fecha,
        tarea.prioridad,
        tarea.estado
      ));
    }
    return [];
  });
  
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  const onClose = () => {
    setMostrarFormulario(false);
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = tareas.filter((_, i) => i !== index);
    setTareas(nuevasTareas);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-950 flex flex-col"> 
        {/* Header fijo */}
        <div className="h-20 flex items-center justify-center border-b border-gray-700">
          <h1 className="text-xl font-bold text-white">Manager Tareas</h1>
        </div>
        
        {/* Contenedor de tareas con altura fija */}
        <div className="flex-1 px-4 py-6 overflow-y-auto pb-24 relative">
          {tareas.length === 0 ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold mb-2">No hay tareas aún</h3>
              <p className="text-center">Haz clic en el botón "+" para agregar tu primera tarea</p>
            </div>
          ) : (
            // Grid de tareas cuando existen
            <div className="max-w-4xl mx-auto space-y-4">
              {tareas.map((tarea, index) => (
                <TarjetaTarea
                  key={`tarea-${index}-${tarea.nombre}`}
                  nombre={tarea.nombre}
                  descripcion={tarea.descripcion}
                  fecha={tarea.fecha}
                  estado={tarea.estado}
                  prioridad={tarea.prioridad}
                  onEliminar={() => eliminarTarea(index)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Botón fijo en la parte inferior */}
        <div className="fixed bottom-4 right-4 z-10">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-full shadow-lg text-xl transition-colors" onClick={() => setMostrarFormulario(true)}>
            +
          </button>
        </div>

        <NuevaTarea isVisible={mostrarFormulario} onClose={onClose} tareas={tareas} setTareas={setTareas} />

      </div>
    </>
  )
}

export default App
