import { config } from 'dotenv';
config();

export const MQTT = 
{
    server: process.env.REACT_APP_BASE_BROKER as string,
    port: parseInt(process.env.REACT_APP_BASE_BROKER_PORT as string),
    topic: process.env.REACT_APP_BASE_BROKER_TOPIC as string,
}

export const DB = 
{
    database: process.env.MYSQL_ADDON_DB as string,
    host: process.env.MYSQL_ADDON_HOST,
    password: process.env.MYSQL_ADDON_PASSWORD,
    post: process.env.MYSQL_ADDON_PORT,
    user: process.env.MYSQL_ADDON_USER as string,
}

export const SECRET = 
{
    token: process.env.SECRET!.toString()
};


export const PORT_SERVER = process.env.PORT || 5000;