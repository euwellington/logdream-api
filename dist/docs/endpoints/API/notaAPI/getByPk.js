"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByPkNota = void 0;
const getByPkNota = {
    get: {
        tags: ['Nota'],
        description: "listar nota por id",
        operationId: 'listarNotaPorId',
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
        responses: {},
    }
};
exports.getByPkNota = getByPkNota;
