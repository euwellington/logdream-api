"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAPINota = void 0;
const updateAPINota = {
    put: {
        tags: ['Nota'],
        description: "Atualizar nota",
        operationId: 'updatUsuario',
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
    },
};
exports.updateAPINota = updateAPINota;
