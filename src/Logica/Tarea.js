export default class Tarea{
    constructor(nombre, descripcion, fecha, prioridad, estado){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.prioridad = prioridad; // 'baja', 'media', 'alta'
        this.estado = estado; // 'pendiente', 'en progreso', 'completada'
    }

    actualizarEstado(nuevoEstado){
        this.estado = nuevoEstado;
    }

    setNombre(nuevoNombre){
        this.nombre = nuevoNombre;
    }

    setDescripcion(nuevaDescripcion){
        this.descripcion = nuevaDescripcion;
    }

    setFecha(nuevaFecha){
        this.fecha = nuevaFecha;
    }


}