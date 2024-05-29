const CitaDao = require('./CitaDao');

class CitaDaoImpl extends CitaDao {
    constructor() {
        super();
        if (!CitaDaoImpl.instance) {
            this.citas = new Map();
            CitaDaoImpl.instance = this;
        }
        return CitaDaoImpl.instance;
    }

    addCita(cita) {
        this.citas.set(cita.id, cita);
    }

    getCita(id) {
        return this.citas.get(id);
    }

    getAllCitas() {
        return Array.from(this.citas.values());
    }
}

const instance = new CitaDaoImpl();
Object.freeze(instance);
module.exports = instance;
