"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByEquipamentoFkNota = void 0;
const getByEquipamentoFkNota = {
    get: {
        tags: ['Nota'],
        description: "listar nota por equipamentoId",
        operationId: 'listaEquipamentoPorId',
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
exports.getByEquipamentoFkNota = getByEquipamentoFkNota;
