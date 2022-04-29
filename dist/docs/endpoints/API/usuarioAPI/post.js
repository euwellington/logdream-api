"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postAPIUsuario = void 0;
const postAPIUsuario = {
    post: {
        tags: ['Usuario'],
        description: "cadastrar usuario",
        operationId: 'postUsuario',
        parameters: [],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/Usuario'
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
exports.postAPIUsuario = postAPIUsuario;
