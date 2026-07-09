"use strict";

function showLoading(show) {

    const loading = document.getElementById("loading");

    if (!loading) return;

    if (show) {

        loading.classList.remove("hidden");

    }

    else {

        loading.classList.add("hidden");

    }

}