"use strict";

let diagnosticCache = null;

async function getDiagnostics() {

    if (diagnosticCache)
        return diagnosticCache;

    try {

        diagnosticCache = await apiCall("Get", {

            typeName: "Diagnostic",

            search: {}

        });

        console.log("Diagnostics :", diagnosticCache.length);

        return diagnosticCache;

    }
    catch (e) {

        console.error(e);

        return [];

    }

}