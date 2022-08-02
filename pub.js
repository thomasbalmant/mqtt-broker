//MQTT PUBLISHER
let mqtt = require('mqtt')
let client = mqtt.connect('mqtt://localhost:1234')
let topic = 'Test1234'
let message = 'Hello World'

client.on('connect', () => {
    setInterval(() => {
        client.publish(topic, message)
        console.log('Message sent:', message);
    }, 5000);
})
