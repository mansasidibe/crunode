// POUR INSTALLER LES MODULE npm install --save mysql@version body-parser@ver... ....
const mysql = require('mysql');
const express = require('express'); // IMPORTATION DU MODULE EXPRESS
const bodyparser = require('body-parser'); // IMPORTATION DU MODULE BODY-PARSER

var app = express();

// TOUTES LES DONNEES SERONT EN FORMAT JSON
app.user(bodyparser.JSON());

// CONNEXION DE LA BASE DE DONNEES
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // VOTRE NOM D'UTILISATEUR DE MYSQL
    password: '', // VOTRE MOT DE PASSE
    database: 'my_db' // VOTRE BASE DE DONNEES
});

// MESSAGE D'ETAT DE LA CONNEXION 
connection.connect((eer) => {
    if (!err)
        // S'IL N'YA PAS D'ERREUR
        console.log("La base de données est connectée avec succès");
    else
        // S'IL YA UNE ERREUR
        console.log("erreur de connexion, réessayer svp" + JSON.stringify(err, undefined, 2));
});

// LANCEMENT DU PROJET SUR LE PORT 3000, POUR LE LANCER 'node index.js'
app.listen(3000, () => console.log('Le serveur express est lancé sur le port 3000'));

// LA FONCTION GET
app.get('/produits', (req, res) => {

    // LA REQUETE QUI ENVOIE LES DONNEES
    connection.query('SELECT * FROM produits', (err, rows, fiels) => {
        if (!err)
            // S'IL N'YA PAS D'ERREUR
            console.log(rows);
        else
            // S'IL YA UNE ERREUR
            console.log(err);
    });
});