const postAPIEquipamento = 
{
    post:{
        tags: ['Equipamento'],
        description: "cadastrar equipamento",
        operationId: 'postEquipamento',
        parameters:[],
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
                description:"Resposta do servidor",
                // content:{
                //     'application/json':{
                //         schema:{
                //             $ref:'#/components/schemas/Evento'
                //         }
                //     }
                // }
            }
        }
    }
}

export { postAPIEquipamento }