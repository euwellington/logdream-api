"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByEquipamentoFkEndereco = void 0;
const getByEquipamentoFkEndereco = {
    get: {
        tags: ['Endereco'],
        description: "listar endereco por equipamentoId",
        operationId: 'listarEnderecoPorEquipamentoId',
        parameters: [
            {
                name: "id",
                in: "path",
                schema: {
                //   $ref: "#/components/schemas/id", // id model
                },
                required: true,
                description: "Id do equipamento", // param desc
            },
        ],
        responses: {},
    }
};
exports.getByEquipamentoFkEndereco = getByEquipamentoFkEndereco;
