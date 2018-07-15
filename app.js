var chatbotrestify=require('restify');
var botbuilder=require('botbuilder');

var server=chatbotrestify.createServer();
server.listen(process.env.port || process.env.PORT || 3978,function(){
    console.log('%s listening to %s',server.name,server.url);
});

//create chatbot connector
 
var testbotConnector=new botbuilder.ChatConnector({
appId:process.env.MICROSFT_APP_ID,
appPassword:process.env.MICROSOFT_APP_PASSWORD
});

//var testbotConnector=new  botbuilder.ConsoleConnector().listen();
var testbot= new botbuilder.UniversalBot(testbotConnector);
server.post('/api/messages',testbotConnector.listen());

testbot.dialog('/',function(session){
session.send('hi let me know how can i help you?')
})