'use strict'

var iothub = require('azure-iothub');
var util = require('util');

var connectionString = 'HostName=LaIotHub.azure-devices.net;SharedAccessKeyName=iothubowner;SharedAccessKey=a4lfs6zJLy7u+6hjQ/UgF5RJyJLn1A4HWygzYkyrtBY=';
var registry = iothub.Registry.fromConnectionString(connectionString);

var device = {
    deviceId: 'myFirstNodeDevice1'
  }
  registry.create(device, function(err, deviceInfo, res) {
    if (err) {
      registry.get(device.deviceId, printDeviceInfo);
    }
    if (deviceInfo) {
      printDeviceInfo(err, deviceInfo, res)
    }
  });
  
  function printDeviceInfo(err, deviceInfo, res) {
    if (deviceInfo) {
      console.log('Device ID: ' + deviceInfo.deviceId);
      console.log('Device key: ' + deviceInfo.authentication.symmetricKey.primaryKey);
    }
  }