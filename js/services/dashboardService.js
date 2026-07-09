"use strict";

async function initializeDashboard() {

    console.log("Initializing Dashboard...");

    if (!api) {

        console.warn("Running Browser Mode");

        return;

    }

    const devices = await getDevices();

    console.log(devices);

}