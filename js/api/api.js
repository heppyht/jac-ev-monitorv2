"use strict";

function apiCall(method, params) {

    return new Promise((resolve, reject) => {

        console.log("========== API CALL ==========");
        console.log("Method :", method);
        console.log("Params :", params);

        api.call(
            method,
            params,
            function (result) {

                console.log("API SUCCESS");
                console.log(result);

                resolve(result);

            },
            function (error) {

                console.error("API ERROR");
                console.error(error);

                reject(error);

            }
        );

    });

}