"use strict";

let diagnosticCache = [];

async function getDiagnostics() {

    if (diagnosticCache.length > 0)
        return diagnosticCache;

    try {

        diagnosticCache = await apiCall("Get", {

            typeName: "Diagnostic",

            search: {}

        });

        console.log("Diagnostics Loaded :", diagnosticCache.length);

        console.table(

            diagnosticCache.map(d => ({

                id: d.id,

                name: d.name,

                unit: d.unitOfMeasure

            }))

        );

        return diagnosticCache;

    }
    catch (e) {

        console.error(e);

        return [];

    }

}