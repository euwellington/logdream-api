"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAPIUsuario = void 0;
const deleteAPIUsuario = {
    delete: {
        tags: ['Usuario'],
        description: "deletar usuario",
        operationId: 'deletar',
        parameters: [
            {
                name: "id",
                in: "path",
                schema: {
                //   $ref: "#/components/schemas/id", // id model
                },
                required: true,
                description: "Id do usuario", // param desc
            },
        ],
        responses: {
            '200': {
                description: "Resposta do servidor",
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Usuario'
                        }
                    }
                }
            }
        }
    },
};
exports.deleteAPIUsuario = deleteAPIUsuario;
