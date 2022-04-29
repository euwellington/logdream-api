const getAllAPIEvento = 
{
    get:{
        tags: ['Eventos'],
        description: "Listar todos os eventos",
        operationId: 'getEvtnos',
        parameters:[],
        
        responses:{
            '200':{
                description:"Resposta do servidor",
                content:{
                    'application/json':{
                        schema:{
                            $ref:'#/components/schemas/Evento'
                        }
                    }
                }
            }
        }
    },
}

export { getAllAPIEvento }
