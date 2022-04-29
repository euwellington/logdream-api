"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT_SERVER = exports.SECRET = exports.DB = exports.MQTT = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.MQTT = {
    server: process.env.REACT_APP_BASE_BROKER,
    port: parseInt(process.env.REACT_APP_BASE_BROKER_PORT),
    topic: process.env.REACT_APP_BASE_BROKER_TOPIC,
};
exports.DB = {
    database: process.env.MYSQL_ADDON_DB,
    host: process.env.MYSQL_ADDON_HOST,
    password: process.env.MYSQL_ADDON_PASSWORD,
    post: process.env.MYSQL_ADDON_PORT,
    user: process.env.MYSQL_ADDON_USER,
};
exports.SECRET = {
    token: process.env.SECRET.toString()
};
exports.PORT_SERVER = process.env.PORT || 5000;
