"use strict";

/*
=========================================
JAC EV Monitor
Geotab API Wrapper
=========================================
*/

async function apiCall(method, params) {

    return new Promise((resolve, reject) => {

        if (!api) {

            reject("Geotab API is not initialized.");

            return;
        }

        api.call(

            method,

            params,

            resolve,

            reject

        );

    });

}