//Game Object
var Card = function(name, value, id, img) {
    this.name = name;
    this.value = value;
    this.id = id;
    this.img = img;
}

//Object Creation
var as1 = new Card('Ace of Spade 1', 0, 'as1', 'pics/aceofspades.png');
var as2 = new Card('Ace of Spade 2', 0, 'as2', 'pics/aceofspades.png');
var ac1 = new Card('Ace of Clubs 1', 1, 'ac1', 'pics/aceofclubs.png');
var ac2 = new Card('Ace of Clubs 2', 1, 'ac2', 'pics/aceofclubs.png');
var ah1 = new Card('Ace of Hearts 1', 2, 'ah1', 'pics/aceofhearts.png');
var ah2 = new Card('Ace of Hearts 2', 2, 'ah2', 'pics/aceofhearts.png');
var ad1 = new Card('Ace of Diamonds 1', 3, 'ad1', 'pics/aceofdiamonds.png');
var ad2 = new Card('Ace of Diamonds 2', 3, 'ad2', 'pics/aceofdiamonds.png');
var sk1 = new Card('Suicide King 1', 4, 'sk1', 'pics/suicideking.png');
var sk2 = new Card('Suicide King 2', 4, 'sk2', 'pics/suicideking.png');
var oej1 = new Card('One Eyed Jack 1', 5, 'oej1', 'pics/oneeyedjack.png');
var oej2 = new Card('One Eyed Jack 2', 5, 'oej2','pics/oneeyedjack.png');

//Game Variables
var cards = new Array(as1, as2, ac1, ac2, ah1, ah2, ad1, ad2, sk1, sk2, oej1, oej2);
var flipCounter = false;
var flipOne = 0;
var flipTwo = 0;
var totalFlips = 10;
var points = 0;
var cardID1 = '';
var cardID2 = '';
var eventTarget1 = '';
var eventTarget2 = '';
var timer;

//Dynamically Setup The Board
function boardSetup(){
    shuffle(cards);
    consoleCards(cards);
    document.getElementById('resetButton').style.visibility = 'visible';
    for(var x = 0; x < cards.length; x++){
        document.getElementById('card' + x).innerHTML = "<div class='flip-card w3-margin' id='flip-card" + x + "'>\
                                                            <div class='flip-card-inner' id='flip-card-inner" + x + "'>\
                                                                <div class='flip-card-front'>\
                                                                    <img src='pics/cardBack.png' alt='Back of Playing Card' class='cardImg' onclick='flipCard(event)' id='" + cards[x].id + "'>\
                                                                </div>\
                                                                <div class='flip-card-back'>\
                                                                    <img src='" + cards[x].img + "' alt='" + cards[x].name + "' class='cardImg'>\
                                                                </div>\
                                                            </div>\
                                                        </div>";
    }
}

// Refresh the game
function refresh(){
    points = 0;
    totalFlips = 10;
    document.getElementById('points').innerHTML = ' ' + points;
    document.getElementById('attempts').innerHTML = ' ' + totalFlips;
    boardSetup();
    flipCounter = false;
    clearTimeout(timer);
}

// Game Functions
function shuffle(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}

//Console print the cards to ensure random card placement
function consoleCards(array){
    for(x in array){
        console.log(x + '. ' + array[x].name);
    }
}

//Store value of first card flipped
function firstFlip(id){
    stopTimer();
    for(x in cards){
        if(cards[x].id == id){
            flipOne = cards[x].value;
            cardID1 = cards[x].id;
        }
    }
    flipCounter = true;
}

//Store value of second card flipped and check match
function secondFlip(id){
    for(x in cards){
        if(cards[x].id == id){
            flipTwo = cards[x].value;
            cardID2 = cards[x].id;
        }
    }
    flipCounter = false;
    checkMatch();
}

//Check the cards for a match
function checkMatch(){
    if(flipOne == flipTwo){
        points += 36;
        console.log('Match!');
    }
    else{
        timer = setTimeout(function(){
            eventTarget1.style.transform = 'rotateY(0deg)';
            eventTarget2.style.transform = 'rotateY(0deg)';
        }, 750);
        totalFlips--;
    }
    document.getElementById('points').innerHTML = ' ' + points;
    document.getElementById('attempts').innerHTML = ' ' + totalFlips;
    if(points == 216){
        var winAlert = setTimeout(function(){
            alert('You Won!');
        }, 2000);
    }
}

//Handle card flip animation
function flipCard(event){
    document.getElementById(event.target.parentElement.parentElement.id).style.transform = 'rotateY(180deg)';
    var cardId = event.target.id;
    //Store the ID of the card fipped for value checking
    if(!flipCounter){
        eventTarget1 = document.getElementById(event.target.parentElement.parentElement.id);
        firstFlip(cardId);
    }
    else{
        eventTarget2 = document.getElementById(event.target.parentElement.parentElement.id);
        secondFlip(cardId);
    }
}

//Stops setTimeout function
function stopTimer(){
    clearTimeout(timer);
}