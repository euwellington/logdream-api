"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByEquipamentoFkUsuario = void 0;
const getByEquipamentoFkUsuario = {
    get: {
        tags: ['Usuario'],
        description: "listar usuario por id",
        operationId: 'listarUsuariroPorId',
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
            // 200: {
            //   description: "Evento Deletado", // response desc
            // },
            // response code
            404: {
                description: "Usuario não encontrado", // response desc
            },
            // response code
            500: {
                description: "Erro no servidor", // response desc
            },
        },
    }
};
exports.getByEquipamentoFkUsuario = getByEquipamentoFkUsuario;
