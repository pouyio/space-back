var Client = require('ssh2-sftp-client');
var sftp = new Client();

sftp.lunaConnection = {
    host: '176.9.145.158',
    port: '22',
    username: 'root',
    password: 'Jo7rG3_%eV3-'
};

module.exports = sftp;
