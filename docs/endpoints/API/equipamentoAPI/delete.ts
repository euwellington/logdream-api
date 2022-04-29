const deleteAPIEquipamento = 
{
    delete:{
        tags: ['Equipamento'],
        description: "deletar equipamento",
        operationId: 'deletar equipamento',
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
                description:"Resposta do servidor",
                content:{
                    'application/json':{
                        // schema:{
                        //     $ref:'#/components/schemas/Equipamento'
                        // }
                    }
                }
            }
        }
    },
}

export { deleteAPIEquipamento }
