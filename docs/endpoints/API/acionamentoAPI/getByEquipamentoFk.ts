const getByFkEquipamentoAPIAcionamento = 
{
    get:{
        tags: ['Acionamento'],
        description: "Listar acionamento por equipamento",
        operationId: 'AcionamentoFkEquipamentoId',
        parameters:[
            {
                name: "id", // name of param
                in: "path", // location of param
                schema: {
                //   $ref: "#/components/schemas/id", // id model
                },
                required: true, // mandatory
                description: "Id do equipamento", // param desc
              },
        ],
        responses:{
            '200':{
                // description:"Resposta do servidor",
                // content:{
                //     'application/json':{
                //         schema:{
                //             $ref:'#/components/schemas/Acionamento'
                //         }
                //     }
                // }
            }
        }
    },
}

export { getByFkEquipamentoAPIAcionamento }
