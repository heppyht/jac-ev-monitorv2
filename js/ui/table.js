"use strict";

function renderVehicleTable(devices) {

    const tbody = document.getElementById("vehicleBody");

    tbody.innerHTML = "";

    devices.forEach((device, index) => {

        tbody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${device.name}</td>
                <td>${device.serialNumber}</td>
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