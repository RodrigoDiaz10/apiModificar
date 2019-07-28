var server = require('./server');
    var ds = server.dataSources.db;
    var lbTables = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role','book'];//poner todas las tablas de modelos
    ds.automigrate(lbTables, function(er) {//                                     entrar a la carpeta server y ejecutar node create-lb-tables.js
        if (er) throw er;
        console.log('Loopback tables [' - lbTables - '] created in ', ds.adapter.name);
        ds.disconnect();
    });