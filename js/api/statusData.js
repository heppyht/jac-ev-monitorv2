"use strict";

async function getStatusData() {

    try {

        const status = await apiCall("Get", {

            typeName: "StatusData",

            search: {},

            resultsLimit: 5000

        });

        console.log("StatusData :", status.length);

        return status;

    }

    catch (e) {

        console.error(e);

        return [];

    }

}