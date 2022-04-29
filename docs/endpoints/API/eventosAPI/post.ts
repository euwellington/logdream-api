const postAPIEvento = 
{
    post:{
        tags: ['Eventos'],
        description: "cadastrar evento",
        operationId: 'postEventos',
        parameters:[],
        requestBody: {
            content:{
                'application/json': {
                    schema:{
                        $ref:'#/components/schemas/Evento'
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

export { postAPIEvento }