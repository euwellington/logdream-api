import mqtt from 'mqtt';
import { MQTT } from '../../env';

export const client = mqtt.connect(
    MQTT.server, 
    { 
        port: 1883, 
        clientId: Math.floor(Math.random() * 1946).toString()
    });


client.on('connect', function() {
    // setInterval(() => {
    //     i = i + 1;
    //     client.publish('touchbackend_mqtt', `count: ${i}`)
    //     if(i === 6) {
    //         i = 0;
    //     }
    // }, 2000);
});

export const send = async (topic: string, message: string) => {
    client.publish(topic, message);
    // Socket.enviarMensagem(message);
}

export const enviaAcionamento = async (topic: string, buffer: string) => {
    client.publish(topic, buffer);
    // Socket.enviarMensagem(message);
}
