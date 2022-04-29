const getAllAPIEndereco = 
{
    get:{
        tags: ['Endereco'],
        description: "Listar todos os enderecos",
        operationId: 'getEndereco',
        parameters:[],
        responses:{
            // '200':{
            //     description:"Resposta do servidor",
            //     content:{
            //         'application/json':{
            //             schema:{
            //                 $ref:'#/components/schemas/Usuario'
            //             }
            //         }
            //     }
            // }
        }
    },
}

export { getAllAPIEndereco }
