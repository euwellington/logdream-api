"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.acionarAPIAcionamento = void 0;
const acionarAPIAcionamento = {
    get: {
        tags: ['Acionamento'],
        description: "acionar",
        operationId: 'acionar',
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
            {
                name: "usuarioId",
                in: "path",
                schema: {
                //   $ref: "#/components/schemas/id", // id model
                },
                required: true,
                description: "Id do usuário", // param desc
            },
            {
                name: "flag",
                in: "path",
                schema: {
                //   $ref: "#/components/schemas/id", // id model
                },
                // required: true, // mandatory
                description: "valor da flag", // param desc
            }
        ],
        responses: {
            '200': {
                description: "Resposta do servidor",
            }
        }
    },
};
exports.acionarAPIAcionamento = acionarAPIAcionamento;
