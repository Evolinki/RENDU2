const fetch = require("node-fetch");

async function getDataFromAPI() {
  return await fetch("https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&rows=20")
    .then(response => response.json())
    .then(data => {
      // Retourner les données de l'API
      return data;
    })
    .catch(error => {
      // Gérer les erreurs éventuelles
      console.log(error);
    });
}

module.exports = getDataFromAPI