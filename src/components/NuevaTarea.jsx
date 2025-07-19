import Tarea from "../Logica/Tarea";


function NuevaTarea({ isVisible, onClose, tareas, setTareas }) {
  if (!isVisible) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nuevaTarea = new Tarea(
      formData.get('nombre'),
      formData.get('descripcion'),
      formData.get('fecha'),
      formData.get('prioridad'),
      formData.get('estado')
    )
    setTareas([...tareas, nuevaTarea]);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
      <div className="bg-gray-800 p-6 rounded-lg shadow-2xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header del modal */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Nueva Tarea</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Formulario */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-white text-sm font-medium mb-2" htmlFor="nombre">
              Nombre de la Tarea *
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors"
              placeholder="Ej: Completar proyecto"
              required
            />
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-2" htmlFor="descripcion">
              Descripción
            </label>
            <textarea
              id="descripcion"
              name="descripcion"
              rows="3"
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors resize-none"
              placeholder="Describe los detalles de la tarea..."
            />
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-2" htmlFor="fecha">
              Fecha de Vencimiento
            </label>
            <input
              type="date"
              id="fecha"
              name="fecha"
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-2" htmlFor="prioridad">
              Prioridad
            </label>
            <select
              id="prioridad"
              name="prioridad"
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors"
            >
              <option value="baja">🟢 Baja</option>
              <option value="media">🟡 Media</option>
              <option value="alta">🔴 Alta</option>
            </select>
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-2" htmlFor="estado">
              Estado
            </label>
            <select
              id="estado"
              name="estado"
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors"
            >
              <option value="pendiente">📝 Pendiente</option>
              <option value="completada">✅ Completada</option>
            </select>
          </div>

          {/* Botones */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 px-4 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-lg"
            >
              Crear Tarea
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NuevaTarea;
