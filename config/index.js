const configObj = require('./config');

module.exports = {

    getDbConnectionString: function () {
        return 'mongodb://'+configObj.dbuname+':'+configObj.dbpass+'@ds247327.mlab.com:47327/node-todo';
    }

}
