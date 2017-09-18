'use strict';
var Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.  
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = undefined;

var SKILL_NAME = "Dog's abuse";
var HELP_MESSAGE = "You can ask dogs abuse to insult your dog" 
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

//=========================================================================================================================================
// List of statements
//=========================================================================================================================================
var data = [
//    "Ella's breath is worse than Satan's armpit",
    "Ella is a dirty wee strumpet",
    "That dog is a lazy slag",
    "Ella is a smelly wee cow",
    "That is the laziest greyhound the world has ever seen",
    "That dog is a cat in disguise",
    "I don't believe that dog is an ex racer, she can't even run the length of herself",
    "Ella is a slagosaurus",
    "That dog is a flea-ridden skank",
    "Ella, you fuckfaced wee swine, nobody even likes you",
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.  
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewAbuseIntent');
    },
    'Unhandled': function () {
        this.emit(':ask', HELP_MESSAGE, HELP_MESSAGE);
    },
    'GetNewAbuseIntent': function () {
        var abuseArr = data;
        var abuseIndex = Math.floor(Math.random() * abuseArr.length);
        var randomInsult = abuseArr[abuseIndex];
        var speechOutput = randomInsult;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomInsult)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};
