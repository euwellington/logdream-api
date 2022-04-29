"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllAPIEvento = void 0;
const getAllAPIEvento = {
    get: {
        tags: ['Eventos'],
        description: "Listar todos os eventos",
        operationId: 'getEvtnos',
        parameters: [],
        responses: {
            '200': {
                description: "Resposta do servidor",
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Evento'
                        }
                    }
                }
            }
        }
    },
};
exports.getAllAPIEvento = getAllAPIEvento;
