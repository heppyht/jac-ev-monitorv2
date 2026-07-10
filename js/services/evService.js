"use strict";

async function loadEVData() {

    const devices = await getDevices();

    const diagnostics = await getDiagnostics();

    console.log("Devices :", devices.length);

    console.log("Diagnostics :", diagnostics.length);

    const vehicles = [];

    for (const device of devices) {

        const status = await getLatestStatusData(device.id);

        vehicles.push({

            id: device.id,

            name: device.name,

            serial: device.serialNumber,

            status

        });

    }

    return vehicles;

}