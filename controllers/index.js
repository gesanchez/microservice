/**
* Archivo de rutas
* Servicio en revision: mysql
* index.js
*/

var express = require('express')
  , exec = require('child_process').exec
  , router = express.Router();


router.get('/', function(req, res) {
    res.sendfile(__dirname + '/index.html');
});

/**
* Router GET /service
* Metodo para revisar el estado del servicio
* @return {String}
*/
router.get('/service', function(req, res) {
    exec('sudo /etc/init.d/mysql status', function(err, stdout, stderr) {
        if (stdout.indexOf('Active: active') != -1) {
            res.status(200).json({ status:true,message: 'El servicio esta corriendo' });
        } else if (stdout.indexOf('Active: inactive') != -1) {
            res.status(200).json({ status:false,message: 'El servicio esta apagado' });
        } else {
            res.status(200).json({ status:false,message: 'El usuario de ejecucion no puede ejecutar la revision o el servicio no existe', falta: true});
        }
    });
});

/**
* Router POST /service
* Metodo para reinicar el servicio
* return {String}
*/
router.post('/service', function(req, res) {
    exec('sudo /etc/init.d/mysql restart', function(err, stdout, stderr) {
        if (!err) {
            res.status(200).json({ status:true,message: 'El servicio esta corriendo' });
        } else {
            res.status(200).json({ status:false,message: 'El usuario de ejecucion no puede ejecutar reinicar el servicio o el servicio no existe', fatal: true});
        }
    });
});

module.exports = router;
