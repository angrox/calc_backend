'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /ping
 */
module.exports = {
    /**
     * summary: 
     * description: 
     * parameters: 
     * produces: application/json, text/json
     * responses: 200, 500
     * operationId: ping
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/ping',
                operation: 'get',
                response: '200'
            }, callback);
        },
        500: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/ping',
                operation: 'get',
                response: '500'
            }, callback);
        }
    }
};
