// Importantion de la lib http qui va créer le serveur qui reçoit les demandes.
import { createServer } from 'http';

// Création de l'objet server avec une routine qui sera éxécutée à chaque demande.
const server = createServer((req, res) => {
    // Avant de traiter la demande comme une default, je vérifie si la demande est sur le lien /random (donc my.app.com/random)
    if(req.url === '/random') {
        // Si c'est le cas, je traite la demande avec la fonction GetRandomHandler
        return GetRandomHandler(req, res);
    }
    // Log au cas où
    console.log('Request received');
    // Envoi du header de la réponse (c'est là que tu indiques le type de contenu et le code de retour -> 200 = OK, 400 = La requête que t'a reçu est pas bonne, 500 = l'appli actuelle a planté ou a pas réussi a faire ce qu'on voulait)
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // Je termine la réponse avec le contenu de cette dernière, j'avais dit que c'était du plain text donc je mets juste du texte. Pour du json par exemple: j'indique 'application/json' dans le type et j'écris en json ma réponse.
    res.end('Hello World\n');
});

// Je démarre le serveur
server.listen(3000);
// Et je log le lien pour dire que c'est ok !
console.log('Server running at http://localhost:3000/');


function GetRandomHandler(req, res) {
    // je génère un nombre aléatoire entre 0 et 100
    const randomNumber = Math.floor(Math.random() * 100);
    let _json = JSON.stringify({
        result: randomNumber
    })
    console.log(_json)
    // je renvoie ce nombre en tant que réponse en json
    res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    res.end(_json);
}