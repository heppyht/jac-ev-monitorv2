"use strict";

async function initializeDashboard() {

    console.log("Initializing Dashboard...");

    if (!api) {

        console.warn("Running Browser Mode");

        return;

    }

    const devices = await getDevices();

    const diagnostics = await getDiagnostics();

    const status = await getStatusData();

    console.log("Devices :", devices.length);

    console.log("Diagnostics :", diagnostics.length);

    console.log("Status :", status.length);

}