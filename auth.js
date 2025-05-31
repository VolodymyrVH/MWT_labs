const Keycloack = require('keycloak-connect');
const session = require('express-session');

const keycloakConfig = {
    "auth-server-url": "https://accounts.universitywithme.org.ua",
    "realm": "KhPI",
    "resource": "student-lab",
    "bearer-only": true
};

const keycloak = new Keycloack({scope: "openid"}, keycloakConfig);
const memoryStore = new session.MemoryStore();

module.exports = {keycloak, memoryStore};
