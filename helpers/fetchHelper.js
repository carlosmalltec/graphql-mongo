const fetch = require("node-fetch");
const config = require('../config/config');


function fetchHelper({ method, route, body }) {
    var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjUsInVzZXJuYW1lIjoiY2FybG9zMzMifQ.MGdK_jbFrTZtOkRa15dSZPT86j_2_aA1yZMdygUEw0s';
    return fetch(config.ENDPOINT + route, {
        method: method,
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        body: body
    }).then(function (res) {
        if (!res.ok) {
            throw new Error("HTTP error, status = " + res.status);
        }
        return res.json();
    }).then(function (resJson) {
        return resJson;
    });
}

module.exports = {
    fetchHelper
};
