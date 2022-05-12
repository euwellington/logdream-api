const Components =
{
    components:{
        // securitySchemes: {
        //     bearerAuth: {
        //         securityScheme: 'bearer_token',
        //         type: "http",
        //         scheme: "bearer",
        //         in: "header",
        //         // bearerFormat: "JWT"
        //     },
        // },
        // security: [{ "Bearer": [] }],
        // swagger: '2.0',
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                description:"Insira o token para consumir os endpoints",
                bearerFormat: 'JWT',
            }
        },
        schemas:{
            Evento:{
                type:'object',
                properties:{
                    id:
                    {
                        type:'string',
                        required: true
                        // description:"Todo identification number",
                        // example:'423e37e8-886e-4fb6-8095-d243af2d0fc9'
                    },
                    usuarioId:
                    {
                        type:'string',
                        // example:'423e37e8-886e-4fb6-8095-d243af2d0fc9'
                    },
                    equipamentoId:
                    {   
                        type: 'string',
                        // example: '423e37e8-886e-4fb6-8095-d243af2d0fc9'
                    },
                    acionamentoId:
                    {   
                        type: 'string',
                        // example: '423e37e8-886e-4fb6-8095-d243af2d0fc9'
                    },
                    dataHora:
                    {   
                        type: 'string',
                        // example: '2021-10-10 13:50:24'
                    }
                }
            },
            Acionamento:{
                type:'object',
                properties:{
                    id:
                    {
                        type:'string',
                        // description:"Todo identification number",
                        example:'423e37e8-886e-4fb6-8095-d243af2d0fc9'
                    },
                    equipamentoId:
                    {
                        type:'string',
                        example:'423e37e8-886e-4fb6-8095-d243af2d0fc9'
                    },
                    nome:
                    {
                        type:'string',
                        example: 'FRANCISCO WELLINGTON DE ABREU FELIPE'
                    },
                    estado:
                    {   
                        type: 'boolean',
                        example: 'false'
                    },
                    topic:
                    {   
                        type: 'string',
                        example: 'sala'
                    },
                    tipo:
                    {   
                        type: 'number',
                        example: '0'
                    },
                    flag:
                    {   
                        type: 'string',
                        example: 'input'
                    }
                },
            },
            Usuario:{
                type:'object',
                properties:{
                    id:
                    {
                        type:'string',
                        // description:"Todo identification number",
                        example:'423e37e8-886e-4fb6-8095-d243af2d0fc9'
                    },
                    equipamentoId:
                    {
                        type:'string',
                        example: '423e37e8-886e-4fb6-8095-d243af2d0fc9'
                    },
                    nome:
                    {
                        type:'string',
                        example: 'FRANCISCO WELLINGTON DE ABREU FELIPE'
                    },
                    cpf:
                    {   
                        type: 'string',
                        example: '000.000.000-25'
                    },
                    email:
                    {   
                        type: 'string',
                        example: 'emailusuario@gmail.com'
                    },
                    nascimento:
                    {   
                        type: 'string',
                        example: '28/02/2001'
                    },
                    senha:
                    {   
                        type: 'string',
                        example: '***********'
                    }
                },
            },   
            Auth:{
                type:'object',
                properties:{
                    email:
                    {
                        type:'string',
                        example: 'we@we.com'
                    },
                    senha:
                    {   
                        type: 'string',
                        example: 123
                    }
                },
            }, 
            Mqtt:{
                type:'object',
                properties:{
                    topic:
                    {
                        type:'string',
                        example: 'topic/topic'
                    },
                    mensagem:
                    {   
                        type: 'string',
                        example: 'Algum texto'
                    }
                },
            },
            Equipamento:{
                type:'object',
                properties:{
                    id:
                    {
                        type:'string',
                        example: '423e37e8-886e-4fb6-8095-d243af2d0fc9'
                    },
                    ip:
                    {   
                        type: 'string',
                        example: '192.168.1.0'
                    },
                    nome:
                    {   
                        type: 'string',
                        example: 'ESP-MORADOR1'
                    },
                    chip:
                    {   
                        type: 'string',
                        example: 'Atmega328p'
                    },
                    versao:
                    {   
                        type: 'string',
                        example: '1.0'
                    },
                    dataCadastro:
                    {   
                        type: 'string',
                        example: '2022-03-30 09:00:07'
                    },
                },
            },
            Nota:{
                type:'object',
                properties:{
                    id:
                    {
                        type:'string',
                        example: '423e37e8-886e-4fb6-8095-d243af2d0fc9'
                    },
                    equipamentoId:
                    {
                        type:'string',
                        example: '423e37e8-886e-4fb6-8095-d243af2d0fc9'
                    },
                    usuarioId:
                    {
                        type:'string',
                        example: '423e37e8-886e-4fb6-8095-d243af2d0fc9'
                    },
                    descricao:
                    {   
                        type: 'string',
                        example: 'nota do equipamento'
                    },
                    tipo:
                    {   
                        type: 'int',
                        example: '0'
                    },
                },
            },
            Endereco:{
                type:'object',
                properties:{
                    id:
                    {
                        type:'string',
                        example: '423e37e8-886e-4fb6-8095-d243af2d0fc9'
                    },
                    equipamentoId:
                    {
                        type:'string',
                        example: '423e37e8-886e-4fb6-8095-d243af2d0fc9'
                    },
                    endereco:
                    {
                        type:'string',
                        example: 'Rua marcio sousaza, 2222'
                    },
                    cidade:
                    {   
                        type: 'string',
                        example: 'Fortaleza'
                    },
                    bairro:
                    {   
                        type: 'string',
                        example: 'nostalgico'
                    },
                    obs:
                    {   
                        type: 'string',
                        example: 'Alguma observação'
                    },
                },
            },
        },
    },
    security: [{
        bearerAuth: []
    }]
}

export { Components };