// Consegna:
// Dato un array di oggetti letterali con: - url dell’immagine - titolo - descrizione
// Creare un carosello come nella foto allegata.
// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.   Al click dell’utente sulle frecce verso sinistra o destra, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sinistra.
// BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
// BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

// ARREY CON LE FOTO
const images = [ 
    { 
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    
    { 
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    },
];


// prendo dal dom il container in cui inserire i div
const boxContainer = document.querySelector(".container");



for(let i = 0; i < images.length; i++){

    // prendo gli oggetti dell'array a partire dal primo
    let game = images[i];

    // console.log(game);

    // inner html con immagine corrispondente associata grazie al ciclo
    let boxImg = `  <div class="box">
                            <img src="${game.image}" alt="">

                            <h2 class="titolo">${game.title}</h2>

                            <p class="sinossi">${game.text}<p> 
                        </div>`;

    // inserisco nel dom l'html creato con js
    boxContainer.innerHTML += boxImg;

}

// seleziono tutti i box nel dom
const items = document.getElementsByClassName("box");
// stampo in console
console.log(items);

// creo una variabile per definire quale item è l'attivo
let activeItem = 0

// aggiungo la classe active al primo item della lista
items[activeItem].classList.add("active");


// riferimento alle icone dal dom
const frecciaSu = document.querySelector(".fa-caret-up");
const frecciaGiu = document.querySelector(".fa-caret-down");



// EVENTO AL CLICK FRECCIA GIù
frecciaGiu.addEventListener("click",
    function(){
        // console.log("hai cliccato la freccia in giù");

        // si verifica solo se ci sono ancora elmenti nella lista per poter aumentare l'indice
        if(activeItem < items.length - 1){
            // rimuovo la classe acitve dall'item corrente
            items[activeItem].classList.remove("active");

            // aumneto di uno l'indice della lista item
            activeItem = activeItem + 1;

            // aggiungo la classe active al nuovo item
            items[activeItem].classList.add("active");

        // se l'indice dell'item attivo è l'ultimo della lista le foto ricominciano dalla prima
        }else if(activeItem === items.length - 1){

            // rimuovo la classe acitve dall'item corrente
            items[activeItem].classList.remove("active");

            // azzero l'indice della lista
            activeItem = 0;

            // aggiungo la classe active al nuovo item
            items[activeItem].classList.add("active");
        }
    }
)

// EVENTO FRECCIA IN SU
frecciaSu.addEventListener("click",
    function(){
        // console.log("hai cliccato la freccia in su");

        // si verifica solo se l'indice dell'item attivo è diverso da 0
        if(activeItem !== 0){
            // rimuovo la classe acitve dall'item corrente
            items[activeItem].classList.remove("active");

            // diminuisco di uno l'indice della lista item
            activeItem = activeItem - 1;

            // aggiungo la classe active al nuovo item
            items[activeItem].classList.add("active");
            
        // se l'indice dell'item attivo è il primo della lista le foto ricominciano dall'ultima
        }else if(activeItem === 0){
            // rimuovo la classe acitve dall'item corrente
            items[activeItem].classList.remove("active");

            // porto l'indice all'ultimo item della lista
            activeItem =  items.length - 1;

            // aggiungo la classe active al nuovo item
            items[activeItem].classList.add("active");
        }
    }
)

