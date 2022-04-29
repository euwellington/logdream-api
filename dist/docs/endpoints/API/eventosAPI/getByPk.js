"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByPkEvento = void 0;
const getByPkEvento = {
    get: {
        tags: ['Eventos'],
        description: "listar evento por id",
        operationId: 'listarEventoPorId',
        parameters: [
            {
                name: "id",
                in: "path",
                schema: {
                //   $ref: "#/components/schemas/id", // id model
                },
                required: true,
                description: "Id do evento", // param desc
            },
        ],
        responses: {
            // response code
            // 200: {
            //   description: "Evento Deletado", // response desc
            // },
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
exports.getByPkEvento = getByPkEvento;
