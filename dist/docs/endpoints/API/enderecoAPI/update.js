"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAPIEndereco = void 0;
const updateAPIEndereco = {
    put: {
        tags: ['Endereco'],
        description: "Atualizar usuario",
        operationId: 'updatUsuario',
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
    },
};
exports.updateAPIEndereco = updateAPIEndereco;
