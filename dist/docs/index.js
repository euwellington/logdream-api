"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.docs = void 0;
const servers_1 = require("./servers");
const basicInfo_1 = require("./basicInfo");
const endpoints_1 = require("./endpoints");
const components_1 = require("./components");
let docs = Object.assign(Object.assign(Object.assign(Object.assign({}, servers_1.servers), basicInfo_1.basciInfo), endpoints_1.Endpoints), components_1.Components);
exports.docs = docs;
