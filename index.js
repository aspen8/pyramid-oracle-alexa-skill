'use strict';
var Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.  
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = undefined;

var SKILL_NAME = "Pyramid Oracle";
var HELP_MESSAGE = "Ask the oracle who is the best footballer, best dressed or who is getting the biggest bonus" 
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

//=========================================================================================================================================
// List of statements
//=========================================================================================================================================

var me = [
    "you, of course",
    "Alasdair",
    "Big Al",
];

var team = [
    "Graham",
    "Kev",
    "Craig",
    "Kieran",
    "Phil",
// etc
];

//Update this line to switch between me and the team
var who = team 

var footballer = [
    "The best player is definitely ",
    "The most gifted footballer in the team is ",
    "There is one person that makes Messi look average, and that person is ",
//    "I'm not sure who the best is but I know the worst is ",
//    "Not sure, but I know someone that has two left feet, I'm looking at you ",
];

var dresser = [
    "The best dressed member of the team is ",
    "The smartest dresser in the team is ",
    "The sharpest looking person in the team is ",
//    "I'm not upto speed on the latest trends but it's definitely not ",
//    "Hmm I don't know, but the scruffiest person is probably "
];

var bonus = [
    "The best bonus is going to ",
    "The biggest bonus is definitely going to ",
//    "I don't know who is getting the best bonus, but it's definitely not ",
//    "I'm not at liberty to divulge that information, but it's definitely not ",
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
        this.emit('BestFootballerIntent');
    },
    'BestFootballerIntent': function () {
        var personArray = who;
	    var messageArray = footballer;
        var personIndex = Math.floor(Math.random() * personArray.length);
        var randomPerson = personArray[personIndex];
	    var footballMessage = Math.floor(Math.random() * messageArray.length);
	    var randomMessage = messageArray[footballMessage];
        var speechOutput = randomMessage + randomPerson;


        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomMessage + randomPerson)
    },
    'BestDressedIntent': function () {
        var personArray = who;
        var messageArray = dresser
        var personIndex = Math.floor(Math.random() * personArray.length);
        var randomPerson = personArray[personIndex];
        var dresserMessage = Math.floor(Math.random() * messageArray.length);
        var randomMessage = messageArray[dresserMessage];
        var speechOutput = randomMessage + randomPerson;


        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomMessage + randomPerson)
    },
    'BiggestBonusIntent': function () {
        var personArray = who;
        var messageArray = bonus
        var personIndex = Math.floor(Math.random() * personArray.length);
        var randomPerson = personArray[personIndex];
        var bonusMessage = Math.floor(Math.random() * messageArray.length);
        var randomMessage = messageArray[bonusMessage];
        var speechOutput = randomMessage + randomPerson;


        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomMessage + randomPerson)
    },
    'Unhandled': function () {
        this.emit(':ask', HELP_MESSAGE, HELP_REPROMPT);
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
	this.emit(':responseReady');	
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
	this.emit(':responseReady');
    }
};
