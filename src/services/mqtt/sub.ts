import mqtt from 'mqtt';
import { MQTT } from '../../env';

export const client = mqtt.connect(MQTT.server, 
    { 
        port: MQTT.port, 
        clientId: Math.floor(Math.random() * 1946).toString()
    });


client.on('connect', function() {
    client.subscribe('7b9dda04-03ac-47fd-819b-e4997b50fd2a/luz');
    console.log('cliente foi subescrito com sucesso!');
});

client.on('message', function(topic, message) {
    console.log(message.toString());
})
clearImmediate


export const log = () => {
    client.on('message', function(topic, message) {
        console.log(message.toString());
    })
}