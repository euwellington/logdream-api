"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const mysql_1 = __importDefault(require("mysql"));
const env_1 = require("../env");
let connection = mysql_1.default.createPool({
    host: env_1.DB.host,
    user: env_1.DB.user,
    password: env_1.DB.password,
    database: env_1.DB.database
});
exports.connection = connection;
