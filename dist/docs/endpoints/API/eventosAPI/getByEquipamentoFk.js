"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByEquipamentoFkEvento = void 0;
const getByEquipamentoFkEvento = {
    get: {
        tags: ['Eventos'],
        description: "listar evento por equipamentoId",
        operationId: 'listarEventoPorEquipamentoId',
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
        responses: {
            // response code
            200: {
                description: "Evento Deletado", // response desc
            },
            // response code
            404: {
                description: "Evento não encontrado", // response desc
            },
            // response code
            500: {
                description: "Erro no servidor", // response desc
            },
        },
    }
};
exports.getByEquipamentoFkEvento = getByEquipamentoFkEvento;
