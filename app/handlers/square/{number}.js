'use strict';
var dataProvider = require('../../data/square/{number}.js');
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
     */
    post: function square(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['post']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
