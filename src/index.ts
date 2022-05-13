import express from 'express';
import { PORT_SERVER, DB } from './env';
import http from 'http';
import cors from 'cors';
import { connection } from './database';
import { serve, setup } from 'swagger-ui-express';
import { docs } from '../docs';
import { routes_auth } from './routes/Auth';
import { routes_usuario } from './routes/Usuario';
import { routes_eventos } from './routes/Eventos';
import { routes_acionamentos } from './routes/Acionamento';
import { routes_mqtt } from './routes/Mqtt';
import { log } from './services/mqtt/sub'
import { routes_equipamentos } from './routes/Equipamento';
import { converterDataHora } from './utils/masks';
import { routes_notas } from './routes/Nota';
import { routes_enderecos } from './routes/endereco';

const app = express();
const httpServer = http.createServer(app);
app.use(cors());
app.use(express.urlencoded())
app.use(express.json())

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

const options = {
    explorer: true,
    swaggerOptions: {
      docExpansion: 'none'
    },
    customCssUrl: 'https://raw.githubusercontent.com/ostranme/swagger-ui-themes/develop/themes/3.x/theme-newspaper.css',
  };

// VAI CONTINUAR COM ESSA ROTA
app.use(
    '/api/doc',
    serve,
    setup(docs, options)
);  

app.use(`/api/auth`, routes_auth);
app.use(`/api/usuario`, routes_usuario);
app.use(`/api/evento`, routes_eventos);
app.use(`/api/acionamento`, routes_acionamentos);
app.use(`/api/mqtt`, routes_mqtt);
app.use(`/api/equipamento`, routes_equipamentos);
app.use(`/api/nota`, routes_notas);
app.use(`/api/endereco`, routes_enderecos);

httpServer.listen(PORT_SERVER, () => 
    {
        console.log('>> BACKEND INICIALIZADO');
        connection.getConnection((err) =>
        {
            if(err) throw err;
            console.log('>> Conectado com o banco');
        })
    }
);