"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostSendMqtt = void 0;
const PostSendMqtt = {
    post: {
        tags: ['Mqtt'],
        description: "Enviar mensagem via mqtt",
        operationId: 'mqtt_send',
        parameters: [],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/Mqtt'
                    }
                }
            }
        },
        responses: {
            '200': {
                description: "Resposta do servidor"
            }
        }
    },
};
exports.PostSendMqtt = PostSendMqtt;
