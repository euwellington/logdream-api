"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAPIEquipamento = void 0;
const updateAPIEquipamento = {
    put: {
        tags: ['Equipamento'],
        description: "Atualizar equipamento",
        operationId: 'update equipamento',
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/Equipamento'
                    }
                }
            }
        },
        responses: {
            '200': {
            // description:"Resposta do servidor",
            // content:{
            //     'application/json':{
            //         schema:{
            //             $ref:'#/components/schemas/Usuario'
            //         }
            //     }
            // }
            }
        }
    },
};
exports.updateAPIEquipamento = updateAPIEquipamento;
