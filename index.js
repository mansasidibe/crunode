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
    database: 'my_db', // VOTRE BASE DE DONNEES
    multipleStatements: true
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
            res.send(rows);
        else
            // S'IL YA UNE ERREUR
            console.log(err);
    });
});

// LA FONCTION GET POUR UN ELEMENT
app.get('/produits/:id', (req, res) => {

    // LA REQUETE QUI ENVOIE LES DONNEES
    connection.query('SELECT * FROM produits WHERE ProdId = ?', [req.params.id], (err, rows, fiels) => {
        if (!err)
            // S'IL N'YA PAS D'ERREUR
            res.send(rows);
        else
            // S'IL YA UNE ERREUR
            console.log(err);
    });
});

// VOUS POUVEZ INSTALLER NODEMON ET FAIRE LANCEMENT GLOBAL "nodemon index.js"

// LA FONCTION DELETE POUR UN ELEMENT
app.delete('/produits/:id', (req, res) => {

    // LA REQUETE QUI ENVOIE LES DONNEES
    connection.query('DELETE FROM produits WHERE ProdId = ?', [req.params.id], (err, rows, fiels) => {
        if (!err)
            // S'IL N'YA PAS D'ERREUR
            res.send("élément supprimé avec succès");
        else
            // S'IL YA UNE ERREUR
            console.log(err);
    });
});

// LA FONCTION INSERT POUR UN ELEMENT
app.post('/produits', (req, res) => {
    let pro = req.body;
    // LES CHAMPS DU FORMULAIRE ICI
    var sql ="SET @ProdId = ?; nomProd = ?; prixProd = ? CALL ProduitAddOrEdit(@ProdIt, @nomProd, prixProd);";

    // LA REQUETE QUI ENVOIE LES DONNEES
    connection.query(sql, [pro.ProdId, pro.nomProd, pro.prixPro], [req.params.id], (err, rows, fiels) => {
        if (!err)
            // S'IL N'YA PAS D'ERREUR
            res.send(rows);
        else
            // S'IL YA UNE ERREUR
            console.log(err);
    });
});