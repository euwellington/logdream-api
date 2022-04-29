const getAllAPIEquipamento = 
{
    get:{
        tags: ['Equipamento'],
        description: "Listar todos os equipamentos",
        operationId: 'getEquipamento',
        parameters:[],
        responses:{
            '200':{
                // description:"Resposta do servidor",
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

export { getAllAPIEquipamento }
