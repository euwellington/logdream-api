"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAPIEndereco = void 0;
const deleteAPIEndereco = {
    delete: {
        tags: ['Endereco'],
        description: "deletar endereco",
        operationId: 'deletar',
        parameters: [
            {
                name: "id",
                in: "path",
                schema: {
                //   $ref: "#/components/schemas/id", // id model
                },
                required: true,
                description: "Id do endereco", // param desc
            },
        ],
        responses: {}
    },
};
exports.deleteAPIEndereco = deleteAPIEndereco;
