async function initializeDashboard() {

    console.log("Initializing Dashboard...");

    if (!api) {

        console.warn("Running Browser Mode");

        return;

    }

    const devices = await getDevices();

    console.table(devices.map(d => ({

        id: d.id,

        name: d.name,

        serial: d.serialNumber,

        vehicle: d.vehicleIdentificationNumber,

        groups: d.groups

    })));

}