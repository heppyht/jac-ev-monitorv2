"use strict";

async function loadEVData() {

    const devices = await getDevices();

    console.table(
        Object.entries(devices[0]).map(([key, value]) => ({
            Field: key,
            Value:
                typeof value === "object"
                    ? "[Object]"
                    : value
        }))
    );

    const diagnostics = await getDiagnostics();

    const firstDevice = devices[0];

    const status = await getLatestStatusData(firstDevice.id);

    console.table(
        status.map(s => ({
            diagnostic: getDiagnosticName(s.diagnostic.id, diagnostics),
            value: s.data,
            time: s.dateTime
        }))
    );

    return devices;

}