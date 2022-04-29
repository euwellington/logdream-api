"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAPINota = void 0;
const deleteAPINota = {
    delete: {
        tags: ['Nota'],
        description: "deletar nota",
        operationId: 'deletar',
        parameters: [
            {
                name: "id",
                in: "path",
                schema: {
                //   $ref: "#/components/schemas/id", // id model
                },
                required: true,
                description: "Id da nota", // param desc
            },
        ],
        responses: {
            '200': {}
        }
    },
};
exports.deleteAPINota = deleteAPINota;
