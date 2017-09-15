Examples refred : https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-node-node-getstarted

Azure IoT Hub is a fully managed service that enables reliable and secure bi-directional communications between millions of Internet of Things (IoT) devices and a solution back end. One of the biggest challenges that IoT projects face is how to reliably and securely connect devices to the solution back end. To address this challenge, IoT Hub:

    1. Offers reliable device-to-cloud and cloud-to-device hyper-scale messaging.
    2. Enables secure communications using per-device security credentials and access control.
    3. Includes device libraries for the most popular languages and platforms.

This tutorial shows you how to:

    1. Use the Azure portal to create an IoT hub.
    2. Create a device identity in your IoT hub.
    3. Create a simulated device app that sends telemetry to your solution back end.

At the end of this tutorial, you have three Node.js console apps:

    1. createdeviceidentity.js, which creates a device identity and associated security key to connect your      simulated device app.
    2. readdevicetocloud.js, which displays the telemetry sent by your simulated device app.
    3. simulatedevice.js, which connects to your IoT hub with the device identity created earlier, and sends     a telemetry message every second using the MQTT protocol.