/*
 * Title: Uptime Monitoring API
 * Description: A RESTFUL API to monitor up or down time of user defined links.
 * Author: Ashikur Rahman ( SovWare )
 * Date: 18/04/22
 * 
 */

//? dependencies
const http = require('http');
const { handelReqRes } = require('./helpers/handelReqRes');

//? app object - module scaffalding
const app = {};

//? configuration
app.config = {
    port: '3000',
};

//? create server
app.createserver = () => {
    const server = http.createServer(app.handelReqRes);
    server.listen(app.config.port, () => {
        console.log(`listen to port number ${app.config.port}`);
    });
}

//? handel request, respons
app.handelReqRes = handelReqRes;


//? start the server
app.createserver();
