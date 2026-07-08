"use strict";

initializeGeotab(async function () {

    console.log("================================");

    console.log("JAC EV Monitor");

    console.log("Production Version");

    console.log("================================");

    try {

        showLoading(true);

        await initializeDashboard();

    }
    catch (e) {

        console.error(e);

    }
    finally {

        showLoading(false);

    }

});