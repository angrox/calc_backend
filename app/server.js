require('dotenv-extended').load();

const http = require('http');
const express = require('express');
const morgan = require('morgan');
const swaggerize = require('swaggerize-express');
const swaggerUi = require('swaggerize-ui');
const path = require('path');
const bodyParser = require('body-parser');

var config = require('./config');
var port = process.env.PORT || 3001;

var app = express();
var server = http.createServer(app);
app.use(bodyParser.json());

if (config.instrumentationKey){ 
    var appInsights = require('applicationinsights');   
    appInsights.setup(config.instrumentationKey).setAutoCollectRequests(true).start();
}

// add logging middleware
app.use(morgan('dev'));

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.use('/docs', swaggerUi({
   docs: '/api/swagger'  
}));

// using https://www.json2yaml.com/
app.use(swaggerize({
     api: path.resolve('./config/api.json'),
     handlers: path.resolve('./handlers'),
     docspath: '/swagger'
}));

// Listen
server.listen(port, function () { 
    console.log('Listening on localhost:'+ port);
    if (config.instrumentationKey){ 
        var insightsClient = appInsights.getClient(config.instrumentationKey);
        insightsClient.trackEvent('app-initializing');
    }
});