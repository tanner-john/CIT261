var Animal = function(id, name, hunger, thirst, energy, happiness) {
    this.id = id;
    this.name = name;
    this.hunger = hunger;
    this.thirst = thirst;
    this.energy = energy;
    this.happiness = happiness;
}

Animal.prototype.eat = function(){
    if(this.hunger < 100){
        this.hunger += 5;
        if(this.happiness < 100){
            this.happiness += 10;
        }
    }
}

Animal.prototype.drink = function(){
    if(this.thirst < 100){
        this.thirst += 10;
        if(this.happiness < 100){
            this.happiness += 3;
        }
    }
}

Animal.prototype.sleep = function(){
    if(this.energy < 100){
        this.energy += 10;
        if(this.happiness < 100){
            this.happiness += 3;
        }
    }
}

Animal.prototype.play = function(){
    if(this.happiness < 100){
        if((this.energy - 30) >= 0){
            this.energy -= 30;
            this.happiness += 10;
        }
        else if(this.energy <= 0){
            this.energy = 0;
        }
        else{
            var increase = this.energy;
            this.energy -= this.energy;
            this.happiness += increase;
        }
    }
}

function eat(){
    panda.eat();
}

function drink(){
    panda.drink();
}

function sleep(){
    panda.sleep();
}

function play(){
    panda.play();
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

function loseGame(){
    clearInterval(window.start);
    document.getElementById('pandaImg').style.display = 'none';
    document.getElementById('loseImg').style.display = 'inline-block';
    clearTimeout(window.stop);
    alert('Panda died of unhappiness!');
}

function winGame(){
    clearInterval(window.start);
    document.getElementById('pandaImg').style.display = 'none';
    document.getElementById('winImg').style.display = 'inline-block';
    alert('Panda is totally HAPPY! YOU WIN!');
    clearTimeout(window.stop);
}

function gameController(panda){
    //Check End Game Condition
    //setTimeout function used to allow screen to update
    if(panda.happiness <= 0){
        window.stop = setTimeout(function(){
            loseGame();
        }, 10);
    }
    if(panda.happiness >= 100 && panda.hunger >= 70 && panda.thirst >= 60 && panda.energy >= 40){
        window.stop = setTimeout(function(){
            winGame();
        }, 10);
    }

    if(panda.hunger > 0){
        panda.hunger -= 3;
    }
    if(panda.thirst > 0){
        panda.thirst -= 1;
    }
    if(panda.energy > 0){
        panda.energy -= 5;
    }

    move();

    if(panda.hunger < 20){
        panda.happiness -= 10;
    }
    else if (panda.hunger < 40){
        panda.happiness -= 5;
    }
    else{
        panda.happiness -= 3;
    }
    console.log('Hunger: ' + panda.hunger);
    console.log('Thirst: ' + panda.thirst);
    console.log('Energy: ' + panda.energy);
    console.log('Happiness: ' + panda.happiness);
}

function move() {
    //PANDA PROGRESS BARS
    //Handle Food Bar
    var pandaFood = document.getElementById("pFood");
    pandaFood.style.width = panda.hunger + '%';
    if(panda.hunger <= 0){
        pandaFood.innerHTML = 0 + '%';
    }
    else if(panda.hunger >= 100){
        panda.hunger = 100;
        pandaFood.innerHTML = 100 + '%';
    }
    else{
        pandaFood.innerHTML = panda.hunger * 1 + '%';
    }
    //Handle Water Bar
    var pandaWater = document.getElementById("pWater");
    pandaWater.style.width = panda.thirst + '%';
    if(panda.thirst <= 0){
        pandaWater.innerHTML = 0 + '%';
    }
    else if(panda.thirst >= 100){
        panda.thirst = 100;
        pandaWater.innerHTML = 100 + '%';
    }
    else{
        pandaWater.innerHTML = panda.thirst * 1 + '%';
    }
    //Handle Energy Bar
    var pandaEnergy = document.getElementById("pEnergy");
    pandaEnergy.style.width = panda.energy + '%';
    if(panda.energy <= 0){
        pandaEnergy.innerHTML = 0 + '%';
    }
    else if(panda.energy >= 100){
        panda.energy = 100;
        pandaEnergy.innerHTML = 100 + '%';
    }
    else{
        pandaEnergy.innerHTML = panda.energy * 1 + '%';
    }
    //Handle Happiness Bar
    var pandaHappiness = document.getElementById("pHappiness");
    pandaHappiness.style.width = panda.happiness + '%';
    if(panda.happiness <= 0){
        pandaHappiness.innerHTML = 0 + '%';
    }
    else if(panda.happiness >= 100){
        panda.happiness = 100;
        pandaHappiness.innerHTML = 100 + '%';
    }
    else{
        pandaHappiness.innerHTML = panda.happiness * 1 + '%';
    }
}