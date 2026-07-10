"use strict";

async function initializeDashboard() {

    console.log("Initializing Dashboard...");

    if (!api) {

        console.warn("Running Browser Mode");

        return;

    }

    const devices = await getDevices();

    // Update Total Device Card
    document.getElementById("totalDevices").textContent = devices.length;

    renderVehicleTable(devices);

    console.table(
        devices.map(d => ({
            id: d.id,
            name: d.name,
            serial: d.serialNumber,
            vehicle: d.vehicleIdentificationNumber
        }))
    );

}