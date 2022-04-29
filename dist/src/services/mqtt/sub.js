"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = exports.client = void 0;
const mqtt_1 = __importDefault(require("mqtt"));
const env_1 = require("../../env");
exports.client = mqtt_1.default.connect(env_1.MQTT.server, {
    port: env_1.MQTT.port,
    clientId: Math.floor(Math.random() * 1946).toString()
});
exports.client.on('connect', function () {
    exports.client.subscribe('7b9dda04-03ac-47fd-819b-e4997b50fd2a/luz');
    console.log('cliente foi subescrito com sucesso!');
});
exports.client.on('message', function (topic, message) {
    console.log(message.toString());
});
clearImmediate;
const log = () => {
    exports.client.on('message', function (topic, message) {
        console.log(message.toString());
    });
};
exports.log = log;
