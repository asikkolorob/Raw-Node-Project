/*
 * Title: Handel Request Respons
 * Description: Handel Request and Respons
 * Author: Ashikur Rahman ( SovWare )
 * Date: 18/04/22
 * 
 */

//? dependencies
const url = require('url');
const {StringDecoder} = require('string_decoder');

//? module scffolding
const handler = {};

handler.handelReqRes = (req, res) => {
    //? Request handel
    //? get the url and parse it
    const parseUrl = url.parse(req.url, true);
    const path = parseUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryString = parseUrl.query;
    const headersObject = req.headers; 

    const decoder = new StringDecoder('utf-8');
    let realData = '';

    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });

    req.on('end', () => {
        realData += decoder.end();
        
        console.log(realData);

        //? Respons handel
        res.end('Hello There,');
    });
}


module.exports = handler;