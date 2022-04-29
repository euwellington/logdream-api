"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postAPIAuth = void 0;
const postAPIAuth = {
    post: {
        tags: ['Auth'],
        description: "login",
        operationId: 'login',
        parameters: [],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/Auth'
                    }
                }
            }
        },
        responses: {}
    }
};
exports.postAPIAuth = postAPIAuth;
