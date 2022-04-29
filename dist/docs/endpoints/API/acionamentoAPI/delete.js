"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAPIAcionamento = void 0;
const deleteAPIAcionamento = {
    delete: {
        tags: ['Acionamento'],
        description: "deletar acionamento",
        operationId: 'deletar',
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
exports.deleteAPIAcionamento = deleteAPIAcionamento;
