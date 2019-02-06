//Game Object
var Card = function(name, value, id, img) {
    this.name = name;
    this.value = value;
    this.id = id;
    this.img = img;
}

//Object creation
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

//Game variables
var cards = new Array(as1, as2, ac1, ac2, ah1, ah2, ad1, ad2, sk1, sk2, oej1, oej2);
var secondFlip = false;
var flipOne = 0;
var flipTwo = 0;
var totalFlips = 10;
var points = 0;

function boardSetup(){
    console.log('boardStup() function called!');
    document.getElementById('playButton').style.display = 'none';
    for(var x = 0; x < cards.length; x++){
        document.getElementById('card' + x).innerHTML = "<div class='flip-card w3-margin' id='flip-card" + x + "'><div class='flip-card-inner' id='flip-card-inner" + x + "'><div class='flip-card-front'><img src='pics/cardBack.png' alt='Back of Playing Card' class='cardImg' onclick='flipCard(event)'></div><div class='flip-card-back'><img src='" + cards[x].img + "' alt='" + cards[x].name + "' class='cardImg' onclick='flipCardBack(event)'></div></div></div>";
    }
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

function consoleCards(array){
    for(x in array){
        console.log(array[x].name);
        console.log(array[x].value);
    }
}

//Determine which flip we are evaluating
function isFirstFlip(){
    if(!secondFlip){
        firstFlip();
    }
    else if(secondFlip){
        secondFlip();
    }
    else{
        console.log('Something went wrong in isFirstFlip() function!');
    }
}

//Store value of first card flipped
function firstFlip(){
    flipOne = 1 //Value of card flipped.
    secondFlip = true;
}

//Store value of second card flipped and check match
function secondFlip(){
    flipTwo = 2 //Value of second card flipped
    checkMatch(flipOne, flipTwo);
}

//Check the cards for a match
function checkMatch(cardA, cardB){
    if(cardA.value == cardB.value){
        //disable flip animation of both DOM elements
        //Remove Dom Elements
        //Increase Score by 1
        //Decrease flips by 1
    }
    else{
        //Run flip animation of both DOM elements
        //Decrease flips by 1
    }
    secondFlip = false;
}

function flipCard(event){
    document.getElementById(event.target.parentElement.parentElement.id).style.transform = 'rotateY(180deg)';
}

function flipCardBack(event){
    document.getElementById(event.target.parentElement.parentElement.id).style.transform = 'rotateY(0deg)';
}

//Game Operation Functions "Actual Gameplay"
shuffle(cards);
consoleCards(cards);