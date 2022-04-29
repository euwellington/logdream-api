"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByFkEquipamentoAPIAcionamento = void 0;
const getByFkEquipamentoAPIAcionamento = {
    get: {
        tags: ['Acionamento'],
        description: "Listar acionamento por equipamento",
        operationId: 'AcionamentoFkEquipamentoId',
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
            // description:"Resposta do servidor",
            // content:{
            //     'application/json':{
            //         schema:{
            //             $ref:'#/components/schemas/Acionamento'
            //         }
            //     }
            // }
            }
        }
    },
};
exports.getByFkEquipamentoAPIAcionamento = getByFkEquipamentoAPIAcionamento;
