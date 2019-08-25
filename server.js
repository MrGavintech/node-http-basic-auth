const express = require('express');
const bodyParser = require('body-parser');
const expressBasicAuth = require('express-basic-auth');
const reqErrorHandler = require('./helper/request-error-handler.js');
const routes = require('./routes/routes.js');
const app = express();
const config = require('config');

const server = app.listen(process.env.PORT || 3000, () => {
    console.log('Worker started on PORT ' + server.address().port + ' and PID is ' + process.pid);
});

app.use(
    bodyParser.json(),
    expressBasicAuth({
        users: { AppAdmin: 'password' }
    }),
    reqErrorHandler()
);

app.use('/', routes);
