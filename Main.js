const CitaDaoImpl = require('./data/CitaDaoImpl');
const CitaServiceImpl = require('./service/CitaServiceImpl');
const CitaUI = require('./ui/CitaUI');

const citaService = new CitaServiceImpl(CitaDaoImpl);
const citaUI = new CitaUI(citaService);

citaUI.showMenu();
