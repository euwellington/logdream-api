"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.enviaAcionamento = exports.send = exports.client = void 0;
const mqtt_1 = __importDefault(require("mqtt"));
const env_1 = require("../../env");
exports.client = mqtt_1.default.connect(env_1.MQTT.server, {
    port: 1883,
    clientId: Math.floor(Math.random() * 1946).toString()
});
exports.client.on('connect', function () {
    // setInterval(() => {
    //     i = i + 1;
    //     client.publish('touchbackend_mqtt', `count: ${i}`)
    //     if(i === 6) {
    //         i = 0;
    //     }
    // }, 2000);
});
const send = (topic, message) => __awaiter(void 0, void 0, void 0, function* () {
    exports.client.publish(topic, message);
    // Socket.enviarMensagem(message);
});
exports.send = send;
const enviaAcionamento = (topic, buffer) => __awaiter(void 0, void 0, void 0, function* () {
    exports.client.publish(topic, buffer);
    // Socket.enviarMensagem(message);
});
exports.enviaAcionamento = enviaAcionamento;
