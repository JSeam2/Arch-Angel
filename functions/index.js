// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
'use strict';
 
const { dialogflow } = require('actions-on-google');
const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

// instantiate app
const app = dialogflow({debug: true});

app.intent('user command', (conv, {location, target, state}) => { 
  conv.ask("Noted! Will do so!");

  // target is always lights for now so we hard code the key
  admin.database().ref(location).set({
     lights : state
  });
});

app.intent('emergency', (conv, {emergency}) => {
  conv.ask("SOS. Calling for help!");

  admin.database().ref('/emergency').set({
     isEmergency : true
  });
});


exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);



//exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
//	console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
//	console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
//
//	function welcome(agent) {
//		agent.add('Welcome to my agent');
//	}
//
//	function fallback(agent) {
//		agent.add('I did not understand');
//		agent.add('Could you try again?');
//	}
//
//	function emergency(agent) {
//		var state = admin.database().ref('/emergency');
//		var obj = {state : true};
//		ref
//
//	}
//
//	let intentMap = new Map();
//	intentMap.set('Default Welcome Intent', welcome);
//	intentMap.set('Default Fallback Intent', fallback);
//	intentMap.set('emergency', emergency);
//	
//	agent.handleRequest(intentMap);
//
//});
