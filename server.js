const express = require('express');
const bodyParser = require('body-parser');
const expressBasicAuth = require('express-basic-auth');
const reqErrorHandler = require('./helper/request-error-handler.js');
const routes = require('./routes/routes.js');
const app = express();
const config = require('config');

app.listen(3000, () => {
    console.log('Server running on port 3000');
    console.log('Environment is ' + config.get('env'));
});

app.use(
    bodyParser.json(),
    expressBasicAuth({
        users: { AppAdmin: 'password' }
    }),
    reqErrorHandler()
);

app.use('/', routes);
