"use strict";

async function loadEVData() {

    const devices = await getDevices();

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