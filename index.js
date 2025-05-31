const express = require('express');
const session = require('express-session');
const {keycloak, memoryStore} = require('./auth');
const protectedRoutes = require('./route');

const app = express();

app.use(session({
    secret: 'something',
    resave: false,
    saveUninitialized: true,
    store: memoryStore
}));

app.use(keycloak.middleware());

app.get('/', (req, res) => {
  res.send('Main');
});

app.use('/data', protectedRoutes);

app.listen(8080, () => {
  console.log('Server is workong on http://localhost:8080');
});