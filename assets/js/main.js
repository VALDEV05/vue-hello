/* Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data. */




//creare un istanza (collegamento tra HTML E JS)
//con le varie classi
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue JS',
    }
})