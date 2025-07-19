import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

function TarjetaTarea({ nombre, descripcion, fecha, estado, prioridad, onEliminar }) {
    
    return (
        <div className="bg-gray-800 shadow-md rounded-lg p-4 mb-4 flex justify-between items-center gap-4">
            {/* Contenido principal - lado izquierdo */}
            <div className="flex-1">
                <h2 className="text-xl font-semibold mb-2 text-white">{nombre}</h2>
                <p className="text-gray-300 mb-2">{descripcion}</p>
                <div className="flex flex-col gap-1 text-sm">
                    <p className="text-gray-400">Fecha: {fecha}</p>
                    <p className={`${estado === 'completada' ? 'text-green-400' : 'text-yellow-400'}`}>
                        Estado: {estado}
                    </p>
                    {prioridad && (
                        <p className={`${
                            prioridad === 'alta' ? 'text-red-400' : 
                            prioridad === 'media' ? 'text-yellow-400' : 
                            'text-green-400'
                        }`}>
                            Prioridad: {prioridad}
                        </p>
                    )}
                </div>
            </div>

            {/* Botones - lado derecho */}
            <div className="flex flex-col gap-4 min-w-fit">
                <button className="bg-blue-600 rounded-full p-3 hover:bg-blue-700 text-white text-sm transition-colors">
                    <FaRegEdit />
                </button>
                <button 
                    className="bg-red-600 rounded-full p-3 hover:bg-red-700 text-white text-sm transition-colors"
                    onClick={onEliminar}
                >
                    <FaRegTrashAlt />
                </button>
            </div>
        </div>
    );
}

export default TarjetaTarea;