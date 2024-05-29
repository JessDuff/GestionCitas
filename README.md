# Gestión de Citas

Sistema de gestión de citas médicas implementado en JavaScript, donde el usuario puede agendar una cita, ver todas las citas agendadas y ver una sola cita 

## Requisitos
- Node.js
  ```bash
  https://nodejs.org/

## Ejecución
1. Clona este repositorio:
2. Navega al directorio del proyecto
   ```bash
   cd GestionCitas
3. Ejecuta el proyecto
  ```bash
    node Main.js
```

## Funcionalidades

El sistema ofrece las siguientes funcionalidades:
1. Agregar Cita
2. Ver Cita por ID
3. Ver Todas las Citas
4. Salir
   
- Agregar Cita
  Para agregar una cita, selecciona la opción 1 en el menú y sigue las instrucciones para ingresar los detalles de la cita (ID, nombre del paciente, fecha y nombre del doctor).

- Ver Cita por ID
  Para ver una cita específica, selecciona la opción 2 en el menú y proporciona el ID de la cita.

- Ver Todas las Citas
  Para ver todas las citas, selecciona la opción 3 en el menú. Se mostrará una lista de todas las citas almacenadas.

- Salir
  Para salir del sistema, selecciona la opción 4 en el menú.



Este sistema utliza una arquitectura de 3 capas y aplica principios SOLID y varios patrones de diseño.

## Principios SOLID

### S: Single Responsibility Principle (SRP)
  Cita.js: Define la estructura de una cita.
  CitaDao.js y CitaDaoImpl.js: Gestión de datos.
  CitaService.js y CitaServiceImpl.js: Lógica de negocio.
  CitaUI.js: Interacción con el usuario.
### O: Open/Closed Principle (OCP)
  Las clases están abiertas para extensión pero cerradas para modificación. Se pueden añadir nuevas funcionalidades extendiendo las clases existentes.
### L: Liskov Substitution Principle (LSP)
  CitaDaoImpl puede ser usado en lugar de CitaDao sin problemas.
### I: Interface Segregation Principle (ISP)
  Las interfaces definen métodos específicos y no están sobrecargadas.
### D: Dependency Inversion Principle (DIP)
  CitaServiceImpl depende de la abstracción CitaDao y no de su implementación concreta.

## Patrones de Diseño

### Singleton Pattern
  CitaDaoImpl.js: Asegura una única instancia de CitaDaoImpl.
### Strategy Pattern
  CitaService y CitaServiceImpl: Separan la lógica de negocio del acceso a datos.

## Arquitectura

### Capa de Presentación (UI)
  CitaUI.js: Maneja la interacción con el usuario.
### Capa de Lógica de Negocio (Service)
  CitaService.js y CitaServiceImpl.js: Contienen la lógica de negocio.
### Capa de Acceso a Datos (Data)
  CitaDao.js y CitaDaoImpl.js: Gestionan el acceso y almacenamiento de datos.

## Estructura
```
  GestionCitas/
  ── data/  -> Capa de acceso a datos
    ─ CitaDao.js
    ─ CitaDaoImpl.js
  ── model/ -> Modelos de datos
    ─ Cita.js
  ── service/ -> Capa de lógica de negocio
    ─ CitaService.js
    ─ CitaServiceImpl.js
  ── ui/ -> Capa de presentación
    ─ CitaUI.js
  ── Main.js
```
