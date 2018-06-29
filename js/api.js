var funcionariosUrl = "funcionarios.json";

// CLEAN CACHE
localStorage.funcionariosData = null;

var funcionariosTask = new Promise(function (resolve, reject) {
    if (localStorage.funcionariosData == null || localStorage.funcionariosData == "null" || localStorage.funcionariosData == "undefined") {
        d3.json(funcionariosUrl, function (error, funcionarios) {
            if (error) {
              console.log(error);
              reject(error);
            }
            resolve(funcionarios);
            localStorage.funcionariosData = JSON.stringify(funcionarios);
        });
    } else {
        resolve(JSON.parse(localStorage.funcionariosData));
    }
});

function getApiUrl() {
    return funcionariosUrl;
}
