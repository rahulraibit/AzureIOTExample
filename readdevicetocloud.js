'use strict'

var eventhubclient = require('azure-event-hubs').Client;
var connectionString = 'HostName=LaIotHub.azure-devices.net;SharedAccessKeyName=iothubowner;SharedAccessKey=q5WwoWguNYrHpVPKaPNXAh5Ieoe6EqoyMG6D5JFqA3E=';


var printError = function(err){
    console.log(err.message);
}

var printMessage = function(message){
    console.log('Message received: ');
    console.log(JSON.stringify(message.body));
    console.log('');
}

var client = eventhubclient.fromConnectionString(connectionString);
client.open()
.then(client.getPartitionIds.bind(client))
.then(function(getPartitionIds){
    return getPartitionIds.map(function(partitionId){
        return client.createReceiver('$Default', partitionId, {'startAfterTime' : Date.now()})
        .then(function(reciever){
            console.log('created partiton receiver:' + partitionId);
            reciever.on('errorReceived', printError);
            reciever.on('message', printMessage);
        }).catch(printError)
    })
})