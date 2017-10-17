'use strict';

const Alexa = require("alexa-sdk");
const language = require('./speech-output');

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.resources = language;
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
        this.emit(':tell', this.t('HELLO'));
    },
    'SayHelloName'() {
        const name = this.event.request.intent.slots.name.value;
        this.emit(':tell', this.t('HELLO_NAME', { name: name }));
    },
    'SessionEndedRequest'() {
        console.log('Session ended with reason: ' + this.event.request.reason);
    },
    'AMAZON.StopIntent'() {
        this.emit(':tell', this.t('BYE'));
    },
    'AMAZON.HelpIntent'() {
        this.emit(':tell', this.t('HELP'));
    },
    'AMAZON.CancelIntent'() {
        this.emit(':tell', this.t('BYE'));
    },
    'Unhandled'() {
        this.emit(':tell', this.t('UNHANDLED'));
    }
};
