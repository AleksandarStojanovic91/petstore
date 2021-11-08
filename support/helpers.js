const request = require('supertest');

/**
 * Sends a POST request
 * @param arg url,api,body,header
 * @returns {Promise<*>} response
 */
async function postRequest(...arg){
    return request.agent(arg[0])//URL
        .post(arg[1])//API
        .send(arg[2])//BODY
        .set(arg[3])//HEADER
        .then(function (res){
            return res;//RESPONSE
        })
        .catch(function (err){
            console.error(err.message);
            return Promise.reject(err);
        });
}

/**
 * Sends a GET request
 * @param arg url,api,header
 * @returns {Promise<*>} response
 */
async function getRequest(...arg){
    return request.agent(arg[0])//URL
        .get(arg[1])//API
        .set(arg[2])//HEADERS
        .then(function (res){
            return res;//RESPONSE
        })
        .catch(function (err){
            console.error(err.message);
            return Promise.reject(err);
        });
}

/**
 * Sends a DELETE request
 * @param arg url,api
 * @returns {Promise<*>} response
 */
async function deleteRequest(...arg) {
    return request.agent(arg[0])                  //URL
        .del(arg[1])                              //API
        .then(function (res) {
            return res;                           //RETURNS RESPONSE
        })
        .catch(function (err) {
            console.error(err.response);
            return Promise.reject(err);
        });
}

/**
 * Sends a PUT request
 * @param arg url,api,body,header
 * @returns {Promise<*>} response
 */
async function putRequest(...arg) {
    return request.agent(arg[0])                  //URL
        .put(arg[1])                              //API
        .send(arg[2])                             //BODY
        .set(arg[3])                              //HEADER
        .then(function (res) {
            return res;                           //RETURNS RESPONSE
        })
        .catch(function (err) {
            console.error(err.message);
            return Promise.reject(err);
        });
}

async function timeout(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

module.exports = {
    postRequest,
    getRequest,
    deleteRequest,
    putRequest,
    timeout
};