"use strict";

async function initializeDashboard() {

    console.log("Initializing Dashboard...");

    if (!api) {

        console.warn("Running Browser Mode");

        return;

    }

    const vehicles = await loadEVData();

    document.getElementById("totalDevices").textContent = vehicles.length;

    renderVehicleTable(vehicles);

}