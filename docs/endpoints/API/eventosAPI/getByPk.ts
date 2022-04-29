const getByPkEvento = 
{
    get:{
        tags: ['Eventos'],
        description: "listar evento por id",
        operationId: 'listarEventoPorId',
        parameters:[
            {
                name: "id", // name of param
                in: "path", // location of param
                schema: {
                //   $ref: "#/components/schemas/id", // id model
                },
                required: true, // mandatory
                description: "Id do evento", // param desc
              },
        ],
        responses: {
            // response code
            // 200: {
            //   description: "Evento Deletado", // response desc
            // },
            // response code
            404: {
              description: "Evento não encontrado", // response desc
            },
            // response code
            500: {
              description: "Erro no servidor", // response desc
            },
        },
    }
}

export { getByPkEvento };