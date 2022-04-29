"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByPkAPIAcionamento = void 0;
const getByPkAPIAcionamento = {
    get: {
        tags: ['Acionamento'],
        description: "Listar acionamento por id",
        operationId: 'getAcionamentoPorId',
        parameters: [
            {
                name: "id",
                in: "path",
                schema: {
                //   $ref: "#/components/schemas/id", // id model
                },
                required: true,
                description: "Id do acionamento", // param desc
            },
        ],
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
exports.getByPkAPIAcionamento = getByPkAPIAcionamento;
