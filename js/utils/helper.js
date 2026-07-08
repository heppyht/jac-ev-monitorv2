"use strict";

function showLoading(state) {

    console.log("Loading :", state);

}

function sleep(ms) {

    return new Promise(resolve => setTimeout(resolve, ms));

}