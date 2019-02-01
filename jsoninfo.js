var request = new XMLHttpRequest();
request.open('GET', 'https://tanner-john.github.io/CIT261/monster.json');
request.onload = function(){
    var rawData = request.responseText;
    var data = JSON.parse(rawData);
    var monsters = Object.keys(data.monsters);
    for(x in monsters){
        var option = document.createElement('option');
        option.text = Object.keys(data.monsters)[x];
        document.getElementById('monsterName').add(option);
    }
}
request.send();

function getMonsterStat(){
    var request = new XMLHttpRequest();
    request.open('GET', 'https://tanner-john.github.io/CIT261/monster.json');
    request.onload = function(){
        var mName = document.getElementById('monsterName');
        var mLvl = document.getElementById('monsterLevel');
        var mType = document.getElementById('monsterType');
        var nameValue = mName.options[mName.selectedIndex].value;
        console.log(nameValue);
        var lvlValue = mLvl.options[mLvl.selectedIndex].value;
        console.log(lvlValue);
        var typeValue = mType.options[mType.selectedIndex].value;
        console.log(typeValue);
        var rawData = request.responseText;
        var data = JSON.parse(rawData);
        document.getElementById('mHealth').innerHTML = data.monsters[nameValue]['level'][lvlValue][typeValue].health;
        document.getElementById('mMove').innerHTML = data.monsters[nameValue]['level'][lvlValue][typeValue].move;
        document.getElementById('mAttack').innerHTML = data.monsters[nameValue]['level'][lvlValue][typeValue].attack;
        document.getElementById('mRange').innerHTML = data.monsters[nameValue]['level'][lvlValue][typeValue].range;
    }
    request.send();
}