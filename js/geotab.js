"use strict";

let api = null;

function initializeGeotab(callback) {

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