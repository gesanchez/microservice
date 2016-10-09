# Microservice
Pequena aplicacion realizada con Express + Polymer, que se encarga de comprobar el estado del servicio MySQL en distribuciones Debian/Ubuntu y con opcion de poder reiniciarlo

# Consideracion
El servicio necesita que el usuario de ejecucion tenga permisos para ejecutar el servicio /etc/init.d/mysql, de no tenerlo la aplicacion retornara el siguiente error "El usuario de ejecucion no puede ejecutar la revision o el servicio no existe".

# Instalacion
Clonar el codigo, navegar hasta la carpeta raiz y ejecutar el siguiente comando
```bash
npm install
```
Abrir el navegador y escribir la direccion:
http://localhost:3000

