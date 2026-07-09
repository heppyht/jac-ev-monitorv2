"use strict";

/*
=========================================
Load Devices
=========================================
*/

async function getDevices() {

    try {

        const devices = await apiCall("Get", {

            typeName: "Device",

            search: {},

            resultsLimit: 500

        });

        console.log("Devices :", devices.length);

        return devices;

    }

    catch (error) {

        console.error("Device Error :", error);

        return [];

    }

}