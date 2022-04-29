"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postAPIEquipamento = void 0;
const postAPIEquipamento = {
    post: {
        tags: ['Equipamento'],
        description: "cadastrar equipamento",
        operationId: 'postEquipamento',
        parameters: [],
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
                description: "Resposta do servidor",
                // content:{
                //     'application/json':{
                //         schema:{
                //             $ref:'#/components/schemas/Evento'
                //         }
                //     }
                // }
            }
        }
    }
};
exports.postAPIEquipamento = postAPIEquipamento;
