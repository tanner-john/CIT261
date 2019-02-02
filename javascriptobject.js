var Animal = function(id, name, hunger, thirst, energy, happiness) {
    this.id = id;
    this.name = name;
    this.hunger = hunger;
    this.thirst = thirst;
    this.energy = energy;
    this.happiness = happiness;
}

Animal.prototype.eat = function(){

}

Animal.prototype.drink = function(){

}

Animal.prototype.sleep = function(){

}

Animal.prototype.play = function(){

}

var panda = new Animal(0, 'PANDA', 60, 10, 40, 50);
var tiger = new Animal(1, 'TIGER', 50, 20, 30, 50);
var monkey = new Animal(2, 'MONKEY', 10, 30, 10, 30);
var toucan = new Animal(3, 'TOUCAN', 20, 30, 20, 10);

function startGame(){
    document.getElementById('start').style.display = 'none';
    document.getElementById('gameContainer').style.display = 'block';
    window.start = setInterval(function(){
        gameController(panda);
    }, 1000);
}

function stopGame(){
    clearInterval(window.start);
    alert('Panda died of unhappiness!');
    clearTimeout(window.stop);
}

function gameController(panda){
    //let happy = document.getElementById("happiness");
    //let hunger = document.getElementById("hunger");
    //let thirst = document.getElementById("thirst");
    //let energy = document.getElementById("energy");
    //happy.value = panda.happiness;
    //hunger.value = panda.hunger;
    //thirst.value = panda.thirst;
    //energy.value = panda.energy;
    panda.hunger -= 3;
    panda.thirst -= 1;
    panda.energy -= 5;
    move();
    if(panda.hunger < 50){
        panda.happiness -= 10;
    }
    else if (panda.hunger < 60){
        panda.happiness -= 5;
    }
    else{
        panda.happiness -= 3;
    }
    if(panda.happiness <= 0){
        //happy.value = 0;
        window.stop = setTimeout(function(){
            stopGame();
        }, 1000);
    }
}

function move() {
    var elem = document.getElementById("pFood");
    var width = panda.hunger;
    elem.style.width = width + '%';
    console.log(width);
}