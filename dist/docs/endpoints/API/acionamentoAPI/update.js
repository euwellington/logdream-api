"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAPIAcionamento = void 0;
const updateAPIAcionamento = {
    put: {
        tags: ['Acionamento'],
        description: "Listar acionamento por id",
        operationId: 'updateAcionamentoPorId',
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/Acionamento'
                    }
                }
            }
        },
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
exports.updateAPIAcionamento = updateAPIAcionamento;
