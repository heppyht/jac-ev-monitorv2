"use strict";

function renderVehicleTable(vehicles) {

    const tbody = document.getElementById("vehicleBody");

    tbody.innerHTML = "";

    vehicles.forEach((v, i) => {

        tbody.innerHTML += `
            <tr>

                <td>${i + 1}</td>

                <td>${v.name}</td>

                <td>${v.serialNumber}</td>

                <td>-</td>

                <td>-</td>

                <td>-</td>

                <td>-</td>

                <td>-</td>

                <td>-</td>

                <td>-</td>

                <td>-</td>

                <td>-</td>

            </tr>
        `;

    });

}