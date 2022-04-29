const updateAPIEquipamento = 
{
    put:{
        tags: ['Equipamento'],
        description: "Atualizar equipamento",
        operationId: 'update equipamento',
        requestBody: {
            content:{
                'application/json': {
                    schema:{
                        $ref:'#/components/schemas/Equipamento'
                    }
                }
            }
        },
        responses:{
            '200':{
                // description:"Resposta do servidor",
                // content:{
                //     'application/json':{
                //         schema:{
                //             $ref:'#/components/schemas/Usuario'
                //         }
                //     }
                // }
            }
        }
    },
}

export { updateAPIEquipamento }
