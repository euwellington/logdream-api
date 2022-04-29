"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postAPIAcionamento = void 0;
const postAPIAcionamento = {
    post: {
        tags: ['Acionamento'],
        description: "Cadastrar acionamento",
        operationId: 'postAcionamento',
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/Acionamento'
                    }
                }
            }
        },
        responses: {
            '200': {
                description: "Resposta do servidor",
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Acionamento'
                        }
                    }
                }
            }
        }
    },
};
exports.postAPIAcionamento = postAPIAcionamento;
