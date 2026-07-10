"use strict";

async function getDiagnostics() {

    try {

        const diagnostics = await apiCall("Get", {

            typeName: "Diagnostic",

            search: {},

            resultsLimit: 5000

        });

        console.log("Diagnostics :", diagnostics.length);

        return diagnostics;

    }

    catch (e) {

        console.error(e);

        return [];

    }

}