const Cita = require('../model/Cita');
const readline = require('readline');

class CitaUI {
    constructor(citaService) {
        this.citaService = citaService;
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    showMenu() {
        console.log('1. Agregar Cita');
        console.log('2. Ver Cita');
        console.log('3. Ver Todas las Citas');
        console.log('4. Salir');

        this.rl.question('Escoja una opcion: ', (choice) => {
            switch (choice) {
                case '1':
                    this.addCita();
                    break;
                case '2':
                    this.viewCita();
                    break;
                case '3':
                    this.viewAllCitas();
                    break;
                case '4':
                    this.rl.close();
                    break;
                default:
                    console.log('Invalido');
                    this.showMenu();
            }
        });
    }

    addCita() {
        this.rl.question('Ingresar Cita ID: ', (id) => {
            this.rl.question('Ingresar Nombre del Paciente: ', (paciente) => {
                this.rl.question('Ingresar Fecha: ', (fecha) => {
                    this.rl.question('Ingresar Nombre del Doctor: ', (doctor) => {
                        const cita = new Cita(id, paciente, fecha, doctor);
                        this.citaService.addCita(cita);
                        console.log('Cita agregada con exito.');
                        this.showMenu();
                    });
                });
            });
        });
    }

    viewCita() {
        this.rl.question('Enter Cita ID: ', (id) => {
            const cita = this.citaService.getCita(id);
            if (cita) {
                console.log(`Cita ID: ${cita.id}`);
                console.log(`Paciente: ${cita.paciente}`);
                console.log(`Fecha: ${cita.fecha}`);
                console.log(`Doctor: ${cita.doctor}`);
            } else {
                console.log('Cita inexistente.');
            }
            this.showMenu();
        });
    }

    viewAllCitas() {
        const citas = this.citaService.getAllCitas();
        citas.forEach((cita) => {
            console.log(`ID Cita: ${cita.id}`);
            console.log(`Paciente: ${cita.paciente}`);
            console.log(`Fecha: ${cita.fecha}`);
            console.log(`Doctor: ${cita.doctor}`);
            console.log('-------------------------');
        });
        this.showMenu();
    }
}

module.exports = CitaUI;
