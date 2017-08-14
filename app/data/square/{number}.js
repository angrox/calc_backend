'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /square/{number}
 */
module.exports = {
    /**
     * summary: 
     * description: 
     * parameters: number
     * produces: application/json, text/json
     * responses: 200, 400
     * operationId: square
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/square/{number}',
                operation: 'post',
                response: '200'
            }, callback);
        },
        400: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/square/{number}',
                operation: 'post',
                response: '400'
            }, callback);
        }
    }
};
