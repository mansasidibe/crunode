const mysql = require('mysql');
const express = require('express');

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