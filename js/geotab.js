"use strict";

let api = null;

function initializeGeotab(callback) {

    // Jika bukan di MyGeotab
    if (typeof geotab === "undefined") {

        console.warn("Geotab API not available. Running in browser mode.");

        document.addEventListener("DOMContentLoaded", callback);

        return;
    }

    // Jika dijalankan di MyGeotab
    geotab.addin.jac_monitor_index = function (apiRef) {

        api = apiRef;

        return {

            initialize: callback,

            focus: callback,

            blur() { },

            idle() { }

        };

    };

}