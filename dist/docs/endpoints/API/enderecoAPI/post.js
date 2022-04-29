"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postAPIEndereco = void 0;
const postAPIEndereco = {
    post: {
        tags: ['Endereco'],
        description: "cadastrar endereco",
        operationId: 'postEndereco',
        parameters: [],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/Endereco'
                    }
                }
            }
        },
        responses: {}
    }
};
exports.postAPIEndereco = postAPIEndereco;
