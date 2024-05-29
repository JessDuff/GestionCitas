const CitaService = require('./CitaService');

class CitaServiceImpl extends CitaService {
    constructor(citaDao) {
        super();
        this.citaDao = citaDao;
    }

    addCita(cita) {
        this.citaDao.addCita(cita);
    }

    getCita(id) {
        return this.citaDao.getCita(id);
    }

    getAllCitas() {
        return this.citaDao.getAllCitas();
    }
}

module.exports = CitaServiceImpl;
