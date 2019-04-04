// Game Object
var Card = function(name, value, id, img) {
    this.name = name;
    this.value = value;
    this.id = id;
    this.img = img;
}

// Game Objects Array
var cards = new Array();
var easyDeck = new Array();
var medDeck = new Array();

// Game Variables
var newGame = true;
var flipCounter = false;
var flipOne = 0;
var flipTwo = 0;
var totalFlips;
var points = 0;
var cardID1 = '';
var cardID2 = '';
var eventTarget1 = '';
var eventTarget2 = '';
var timer;
var totalMatches;
var match = 0;
var easy = 6;
var medium = 12;
var hard = 24;

// AJAX REQUEST
var requestURL = 'https://tanner-john.github.io/CIT261/cards.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function(){
    var cardData = request.response;
    console.log(cardData);
    createCards(cardData);
    cards.sort(compare);
    splitDecks(cards);
}

// Card Object Creation Function
function createCards(jsonObj){
    var x = 1
    var jsonCards = jsonObj['cards'];
    for(var i = 0; i < jsonCards.length; i++){
        cards[i] = new Card(jsonCards[i].name, jsonCards[i].value, jsonCards[i].id, jsonCards[i].image);
        console.log(cards[i]);
    }
}

// Split Deck into 3 decks
function splitDecks(deck){
    for(var e = 0; e < easy; e++){
        easyDeck[e] = deck[e];
    }
    for(var m = 0; m < medium; m++){
        medDeck[m] = deck[m];
    }
}

// Sort Cards for Match Values
function compare(a, b){
    if(a.value < b.value)
        return -1;
    if(a.value > b.value)
        return 1;
    return 0;
}

// Select Difficulty
function setBoard(){
    document.getElementById('id02').style.display = 'none';
    document.getElementById('id03').style.display = 'none';
    match = 0;
    var selection = document.getElementById('level').value;
    if(selection == 'EASY'){
        totalMatches = easy / 2;
        if(newGame){
            totalFlips = 10;
        }
        boardSetup(easy, easyDeck);
    }
    else if(selection == 'MEDIUM'){
        totalMatches = medium / 2;
        if(newGame){
            totalFlips = 15;
        }
        boardSetup(medium, medDeck);
    }
    else{
        totalMatches = hard / 2;
        if(newGame){
            totalFlips = 20;
        }
        boardSetup(hard, cards);
    }
}

//Dynamically Setup The Board
function boardSetup(level, deck){
    if(newGame){
        newGame = false;
    }
    shuffle(deck);
    consoleCards(deck);
    document.getElementById('resetButton').style.visibility = 'visible';
    document.getElementById('attempts').innerHTML = ' ' + totalFlips;
    for(var x = 0; x < level; x++){
        document.getElementById('card' + x).innerHTML = "<div class='flip-card w3-margin' id='flip-card" + x + "'>\
                                                            <div class='flip-card-inner' id='flip-card-inner" + x + "'>\
                                                                <div class='flip-card-front'>\
                                                                    <img src='pics/cardBack.png' alt='Back of Playing Card' class='cardImg' onclick='flipCard(event)' id='" + deck[x].id + "'>\
                                                                </div>\
                                                                <div class='flip-card-back'>\
                                                                    <img src='" + deck[x].img + "' alt='" + deck[x].name + "' class='cardImg'>\
                                                                </div>\
                                                            </div>\
                                                        </div>";
    }
}

// Refresh the game
function refresh(){
    points = 0;
    document.getElementById('points').innerHTML = ' ' + points;
    setBoard();
    flipCounter = false;
    clearTimeout(timer);
}

function reset(){
    for(var z = 0; z < 24; z++){
        document.getElementById('card' + z).innerHTML = '';
    }
    newGame = true;
    refresh();
}

// Game Functions

// Shuffle Deck
function shuffle(array) {
    var m = array.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
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
        match++;
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
    if(match == totalMatches){
        document.getElementById('id02').style.display = 'block';
    }
    if(totalFlips == 0){
        document.getElementById('id03').style.display = 'block';
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

// Check if this is a return user
function checkUserName(){
    if(localStorage.username)
        loadUserInfo();
    else
        loadModal();
}

function loadUserInfo(){
    document.getElementById('nameTitle').innerHTML = 'User: ' + localStorage.username;
}

function loadModal(){
    document.getElementById('id01').style.display = 'block';
}

function storeUserName(){
    var name = document.getElementById('uName').value;
    localStorage.username = name;
    document.getElementById('id01').style.display = 'none';
    loadUserInfo();
}

function loadGuest(){
    document.getElementById('nameTitle').innerHTML = 'User: Guest';
}

/****************************
 * Insert Style Functions
 ***************************/
function removeText(x){
    x.value = '';
    x.style.background = 'yellow';
}

function checkValue(x){
    if(x.value == ''){
        x.value = x.defaultValue;
    }
    x.style.background = 'white';
}