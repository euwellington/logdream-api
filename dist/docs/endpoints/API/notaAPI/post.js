"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postAPINota = void 0;
const postAPINota = {
    post: {
        tags: ['Nota'],
        description: "cadastrar nota",
        operationId: 'postNota',
        parameters: [],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/Nota'
                    }
                }
            }
        },
        responses: {
            '200': {}
        }
    }
};
exports.postAPINota = postAPINota;
