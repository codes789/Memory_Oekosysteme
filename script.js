document.addEventListener('DOMContentLoaded', () => {

    const cardsList = [
        { name: "0", image: "image/0.png" },
        { name: "0", image: "image/0.0.png" },
        { name: "1", image: "image/1.png" },
        { name: "1", image: "image/1.1.png" },
        { name: "2", image: "image/2.png" },
        { name: "2", image: "image/2.2.png" },
        { name: "3", image: "image/3.png" },
        { name: "3", image: "image/3.3.png" },
        { name: "4", image: "image/4.png" },
        { name: "4", image: "image/4.4.png" },
        { name: "5", image: "image/5.png" },
        { name: "5", image: "image/5.5.png" },
        { name: "6", image: "image/6.png" },
        { name: "6", image: "image/6.6.png" },
        { name: "7", image: "image/7.png" },
        { name: "7", image: "image/7.7.png" },
        { name: "8", image: "image/8.png" },
        { name: "8", image: "image/8.8.png" },
        { name: "9", image: "image/9.png" },
        { name: "9", image: "image/9.9.png" },
        
    ];
    cardsList.sort( () => 0.5 - Math.random() );
    const grid = document.querySelector('.gameGrid');
    const attemptsHolder = document.querySelector('.attemptsHolder');
    const foundHolder = document.querySelector('.foundHolder');
    const cardsInGame = 10;


    const btn = document.querySelector("#refresh")
    console.log(btn);
    btn.addEventListener("click", function() {
        location.reload();
    })
    
    var attempts = 0;
    var foundCards = 0;
    attemptsHolder.textContent = attempts;
    foundHolder.textContent = foundCards;

    var chosenCards = [];
    var chosenCardsids = [];

    function initiateBoard(){
            for (var i = 0; i < cardsList.length; i++) {
                var card = document.createElement('img');
                card.setAttribute('src', 'image/X.png');
                card.setAttribute('data-id',i);
                card.addEventListener('click', flipCard);
                grid.appendChild(card);
            }
    }
    
    function flipCard(){
        if(chosenCards.length != 2){
        var cardid = this.getAttribute('data-id');
        if(this.getAttribute('src') != 'image/blank.png') {
            chosenCards.push(cardsList[cardid].name);
            chosenCardsids.push(cardid);
            this.setAttribute('src', cardsList[cardid].image);
            if(chosenCards.length == 2){
                setTimeout(checkForMatch, 800);
            }
        }
    }
}

function checkForMatch(){
    attempts++;
    var cards = document.querySelectorAll('img');
    var firstCard = chosenCardsids[0];
    var secondCard = chosenCardsids[1];
    if(chosenCards[0] == chosenCards[1]){
        foundCards++;
        cards[firstCard].setAttribute('src', 'image/blank.png');
        cards[secondCard].setAttribute('src', 'image/blank.png');
    }else{
        cards[firstCard].setAttribute('src', 'image/X.png');
        cards[secondCard].setAttribute('src', 'image/X.png');
    }
    chosenCards = [];
    chosenCardsids = [];
    attemptsHolder.textContent = attempts;
    foundHolder.textContent = foundCards; 
    if(foundCards == cardsInGame){
        alert('Gut gemacht!')
    }
}

    initiateBoard();
})