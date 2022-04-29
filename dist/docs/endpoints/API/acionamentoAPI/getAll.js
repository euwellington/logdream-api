"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllAPIAcionamento = void 0;
const getAllAPIAcionamento = {
    get: {
        tags: ['Acionamento'],
        description: "Listar todos os acionamentos",
        operationId: 'getAcionamento',
        parameters: [],
        responses: {
            '200': {
                description: "Resposta do servidor",
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Acionamento'
                        }
                    }
                }
            }
        }
    },
};
exports.getAllAPIAcionamento = getAllAPIAcionamento;
