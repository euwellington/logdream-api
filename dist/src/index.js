"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const env_1 = require("./env");
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const database_1 = require("./database");
const swagger_ui_express_1 = require("swagger-ui-express");
const docs_1 = require("../docs");
const Auth_1 = require("./routes/Auth");
const Usuario_1 = require("./routes/Usuario");
const Eventos_1 = require("./routes/Eventos");
const Acionamento_1 = require("./routes/Acionamento");
const Mqtt_1 = require("./routes/Mqtt");
const Equipamento_1 = require("./routes/Equipamento");
const Nota_1 = require("./routes/Nota");
const endereco_1 = require("./routes/endereco");
const app = (0, express_1.default)();
const httpServer = http_1.default.createServer(app);
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded());
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.json({
        status: `on`
    });
});
app.all('/*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
const options = {
    explorer: true,
    swaggerOptions: {
        docExpansion: 'none'
    },
    customCssUrl: 'https://raw.githubusercontent.com/ostranme/swagger-ui-themes/develop/themes/3.x/theme-newspaper.css',
};
app.use('/api/doc', swagger_ui_express_1.serve, (0, swagger_ui_express_1.setup)(docs_1.docs, options));
app.use(`/api/auth`, Auth_1.routes_auth);
app.use(`/api/usuario`, Usuario_1.routes_usuario);
app.use(`/api/evento`, Eventos_1.routes_eventos);
app.use(`/api/acionamento`, Acionamento_1.routes_acionamentos);
app.use(`/api/mqtt`, Mqtt_1.routes_mqtt);
app.use(`/api/equipamento`, Equipamento_1.routes_equipamentos);
app.use(`/api/nota`, Nota_1.routes_notas);
app.use(`/api/endereco`, endereco_1.routes_enderecos);
httpServer.listen(env_1.PORT_SERVER, () => {
    console.log('>> BACKEND INICIALIZADO');
    database_1.connection.getConnection((err) => {
        if (err)
            throw err;
        console.log('>> Conectado com o banco');
    });
});
