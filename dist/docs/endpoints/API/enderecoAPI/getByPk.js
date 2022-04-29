"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByPkEndereco = void 0;
const getByPkEndereco = {
    get: {
        tags: ['Endereco'],
        description: "listar endereco por id",
        operationId: 'listarEnderecoPorId',
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
        responses: {},
    }
};
exports.getByPkEndereco = getByPkEndereco;
