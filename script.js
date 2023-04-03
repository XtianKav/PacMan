const gameDiv = document.getElementById("game");
const sizeCaseWidth = 28;
let score = 0;
const scoreHtml = document.getElementById('score');
/*
cree le plateau

*/
const layout = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
                1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
                1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
                1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
                1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
                1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
                1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
                1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
                1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
                1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
                1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
                1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
                1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
                4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
                1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
                1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
                1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
                1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
                1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
                1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
                1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
                1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
                1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
                1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
                1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
                1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
                1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
                1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

CreerPlateau();

// Pour deplacer le pacman avec les touches du clavier
document.addEventListener("keyup", (event) =>{
 DeplacerPacman(event.key); // permet d'afficher les touches du clavier ds la console  
});

function CreerPlateau(){
    // Pour créer un packman, on commence par un compteur, puis attribuer un data attribue pour chaque case
    let cptCase = 0;
    scoreHtml.innerHTML = score;  // permet d'afficher le score en le récuperant avec sa div
    // Creer des div dynamiquement

    layout.forEach(caseLayOut =>{
        let casePlateau = document.createElement("div");
         //casePlateau.innerHTML = caseLayOut; /* permet d'afficher le numéro pour chacune de div */
        
         // Créer un plateau pour le pacman
        casePlateau.dataset.numeroCase = cptCase;

        switch(caseLayOut){
            case 0: 
                casePlateau.classList.add("point");
                break;
            case 1: 
            casePlateau.classList.add("mur"); /* j'attribue à toutes mes div portant le numéro 1 la div au nom de "mur"  */
            break;

            case 2: 
            casePlateau.classList.add("fantome-area");
            break;

            case 3: 
            casePlateau.classList.add("point-puissance");
            break;

            case 4: 
        
            break;
        }
        //pour ajouter ces div dans la div parent "game"
        gameDiv.appendChild(casePlateau);
        cptCase++;
    })
    //attribution data attribute pour positionner le pacman
    //let casedepart = document.querySelector("[data-numero-case='"+489+"']");
    getCaseByIndex(489).classList.add("pacman");
    
    //Ajoute le fantome au plateau
    generateFantome();

    //deplacement fantome aléatoire
    setInterval(deplacerFantomes, 500);
}
// fonction pour fixer l'index
function getCaseByIndex(index){
    let caseGame = document.querySelector("[data-numero-case='"+index+"']");
    return caseGame;
}

function DeplacerPacman(direction){
    // On séléctionne le déplacement du pacman 
 let pacmanDiv = document.querySelector('.pacman');
 
 // puis on attribue son deplacement dans chacune de case 
 let pacManCase = pacmanDiv.dataset.numeroCase;
 let caseDestination = null;
    switch(direction){
        case "ArrowUp":
            //Déplacer la case contenant pacman de 1 vers le haut        
            caseDestination = getNumerocasedestination(pacManCase, directions.Haut); // variable d'indice de déplacement
            break;
        case "ArrowRight":
            //Déplacer la case contenant pacman de 1 vers la droite
            caseDestination = getNumerocasedestination(pacManCase, directions.Droite);;
            break;
        case "ArrowLeft":
            //Déplacer la case contenant pacman de 1 vers la gauche
            caseDestination = getNumerocasedestination(pacManCase, directions.Gauche);;
            break;
        case "ArrowDown":
            //Déplacer la case contenant pacman de 1 vers le bas
            caseDestination = getNumerocasedestination(pacManCase, directions.Bas);;
            break;
    }
    if(caseDestination != null){
        if(CheckDirectionMur(caseDestination)){
            caseDestination.classList.add("pacman"); // si pas de contrainte on ajoute la class pacman au chemin
            pacmanDiv.classList.remove("pacman"); // La où tu trouves pacman tu l'enlèves sinon il cree un doublon à son passage
            checkPointEating(caseDestination);
        }  
    }
}

//Créer une fonction qui verifie les contraintes de circulation
function CheckDirectionMur(caseDestination){
    if(caseDestination.classList.contains("mur")){ // si la direction que doit prendre le pacman contient un mur...
        return false;
    }
    else{        
        return true;
    }
}

// return true si on est en collision avec un fantome
function CheckFantomeCollision(caseDestination){
    if(caseDestination.classList.contains("fantome")){ 
        return true;
    }
    else{        
        return false;
    }
}

//Fonction pour manger des points
function checkPointEating(){
    if(caseDestination.classList.contains("point")){
        incrementScore();
        caseDestination.classList.remove("point");           
    }
}

//fonction qui permet d'afficher le score
function incrementScore(){
    score++;
    scoreHtml.innerHTML = score;
    //Astuce pour savoir le nombre des points dans le tableau
    let allpoints = layout.filter(l => l == 0);
    console.log(allpoints.length);

    if(score == allpoints.length){
        alert("C'est gagné");
    }
}

// fonction pour genere des fantômes
function generateFantome(){

    for(let i=0; i<4; i++){
        //je recupere les cases qui peuvent supporter la génération d'un fantôme
        // elles ont la classe fantome-area, et non la classe fantome
        let casePotentialForFantome = document.querySelectorAll(".fantome-area:not(.fantome)"); // on récupere la zone des fantomes sans les fantômes qui sont générer
        
        //Générer un fântome * 4
        //parmi les classes dispo, j'en prend une au hasard
        let caseForFantome = casePotentialForFantome[getRandomNumber(casePotentialForFantome.length)]; // detecte les cases pour fantôme
        
        //J'ajoute la fantome à mon fantôme     
        caseForFantome.classList.add("fantome");
    }    
}

// fonction qui genere les cases des fantômes
function getRandomNumber(max){
    return Math.floor(Math.random() * max);
}

function deplacerFantomes(){
 //Récuperer tous les fântomes
 let allFantomes = document.querySelectorAll(".fantome");
 allFantomes.forEach(fantome =>{
    let direction = getRandomNumber(4);
    let fantomeCaseId = fantome.dataset.numeroCase;
 let goodDirectionFinded = false;
 while(!goodDirectionFinded){
    switch(direction){
        case 0://Haut
            caseDestination = getNumerocasedestination(fantomeCaseId, directions.Haut);
            break;
        case 1://Bas
        caseDestination = getNumerocasedestination(fantomeCaseId, directions.Bas);
            break;
        case 2://Gauche
        caseDestination = getNumerocasedestination(fantomeCaseId, directions.Gauche);
            break;
        case 3://Droite
        caseDestination = getNumerocasedestination(fantomeCaseId, directions.Droite);
            break;
    }

    //Vérifier si le fantome peux aller dans n'importe quel direction mais (pas un mur)
    if(CheckDirectionMur(caseDestination) && !CheckFantomeCollision(caseDestination)){
        fantome.classList.remove("fantome"); // classList attribue de gestion de déplacement
        caseDestination.classList.add("fantome"); 
        goodDirectionFinded = true;  
    }
 }
 })
}

//fonction pour gerer les mouvements des fantomes dans leur zone
function getNumerocasedestination(caseActuelle, direction){
    let caseDestination = null;
    switch(direction){
        case directions.Haut:
            caseDestination = getCaseByIndex(parseInt(caseActuelle) - sizeCaseWidth);
            break;
        case directions.Droite:
            caseDestination = getCaseByIndex(parseInt(caseActuelle) + 1);
            break;
        case directions.Gauche:
            caseDestination = getCaseByIndex(parseInt(caseActuelle) - 1);
            break;
        case directions.Bas:
            caseDestination = getCaseByIndex(parseInt(caseActuelle) + sizeCaseWidth);
            break;
    }
    return caseDestination;
}

const directions = {
    Haut : 0,
    Bas: 1,
    Droite: 2,
    Gauche : 3
}