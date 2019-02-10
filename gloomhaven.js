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
        var monster = data.monsters[nameValue]['level'][lvlValue][typeValue];
        document.getElementById('mHealth').innerHTML = monster.health;
        document.getElementById('mMove').innerHTML = monster.move;
        document.getElementById('mAttack').innerHTML = monster.attack;
        document.getElementById('mRange').innerHTML = monster.range;
        var para = document.createElement('p');
        var node = document.createTextNode(JSON.stringify(data.monsters[nameValue]['level'][lvlValue][typeValue]));
        para.appendChild(node);
        var element = document.getElementById('jsonString');
        element.appendChild(para);
    }
    request.send();
}