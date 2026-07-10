"use strict";

async function getLatestStatusData(deviceId) {

    try {

        const data = await apiCall("Get", {

            typeName: "StatusData",

            search: {

                deviceSearch: {

                    id: deviceId

                }

            },

            resultsLimit: 500

        });

        return data;

    }
    catch (e) {

        console.error(e);

        return [];

    }

}