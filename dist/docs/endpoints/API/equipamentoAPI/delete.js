"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAPIEquipamento = void 0;
const deleteAPIEquipamento = {
    delete: {
        tags: ['Equipamento'],
        description: "deletar equipamento",
        operationId: 'deletar equipamento',
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
            '200': {
                description: "Resposta do servidor",
                content: {
                    'application/json': {
                    // schema:{
                    //     $ref:'#/components/schemas/Equipamento'
                    // }
                    }
                }
            }
        }
    },
};
exports.deleteAPIEquipamento = deleteAPIEquipamento;
