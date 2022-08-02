// MQTT SUBSCRIBER
let mqtt = require('mqtt')
let client = mqtt.connect('mqtt://localhost:1234')
let topic = 'Test1234'

client.on('message', ( topic, message ) => {
    message = message.toString()
    console.log('Message received:',message);
})

client.on('connect', () => {
    client.subscribe(topic)
    console.log('Client subscribed to topic:', topic);
})