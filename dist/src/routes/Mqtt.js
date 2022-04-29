"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes_mqtt = void 0;
const express_1 = require("express");
const MqttController_1 = __importDefault(require("../controller/MqttController"));
const token_1 = require("../middleware/token");
exports.routes_mqtt = (0, express_1.Router)();
exports.routes_mqtt.post('/enviar', token_1.verifyJWT, MqttController_1.default.Enviar);
