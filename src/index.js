'use strict';
const Alexa = require("alexa-sdk");

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

const handlers = {
    'LaunchRequest'() {
        this.emit('SayHello');
    },
    'HelloWorldIntent'() {
        this.emit('SayHello');
    },
    'MyNameIsIntent'() {
        this.emit('SayHelloName');
    },
    'SayHello'() {
        this.emit(':tell', 'Hello');
    },
    'SayHelloName'() {
        const name = this.event.request.intent.slots.name.value;
        this.emit(':tell', 'Hello ' + name);
    },
    'SessionEndedRequest'() {
        console.log('Session ended with reason: ' + this.event.request.reason);
    },
    'AMAZON.StopIntent'() {
        this.emit(':tell', 'Bye');
    },
    'AMAZON.HelpIntent'() {
        this.emit(':tell', "You can try: 'alexa, hello world' or 'alexa, ask hello world my" +
            " name is awesome Aaron'");
    },
    'AMAZON.CancelIntent'() {
        this.emit(':tell', 'Bye');
    },
    'Unhandled'() {
        this.emit(':tell', "Sorry, I didn't get that. You can try: 'alexa, hello world'" +
            " or 'alexa, ask hello world my name is awesome Aaron'");
    }
};
