function isInt(number){
    var a = parseInt(number, 10);
    return !isNaN(a) && number == a && number.toString() == a.toString();
};

function basicForLoop(){
    //Remove All Elements From DIV
    var myNode = document.getElementById('textfield');
    var mySecondNode = document.getElementById('fLoopWarning');
    while(myNode.firstChild){
        myNode.removeChild(myNode.firstChild);
    }
    while(mySecondNode.firstChild){
        mySecondNode.removeChild(mySecondNode.firstChild);
    }

    //Store amount to be looped
    var limit = document.getElementsByTagName('input')[0].value;

    //Check if limit is a number
    if(!(isInt(limit))){
        document.getElementById('fLoopWarning').innerHTML = 'INVALID INPUT!';
    }
    //Verify input is within limits
    else if(limit < 1 || limit > 10){
        document.getElementById('fLoopWarning').innerHTML = 'Number is not within limit (1 - 10)! ';
    } 
    //Run Loop 
    else{
        for(var x = 1; x <= limit; x++){
            var icon = document.createElement('i');
            icon.className = "fas fa-undo fa-5x";
            var element = document.getElementById('textfield');
            element.appendChild(icon);
        }
    }
}

function madlibGenerator(){
    //Remove All Elements From DIVS
    var myNode = document.getElementById('madlib');
    while(myNode.firstChild){
        myNode.removeChild(myNode.firstChild);
    }
    var mySecondNode = document.getElementById('userInput');
    while(mySecondNode.firstChild){
        mySecondNode.removeChild(mySecondNode.firstChild);
    }
    //Create Array of Inputs
    var madLibItems = document.getElementsByTagName('input');
    //Create Javascript Object
    var madLibObject = {container: madLibItems[1].value, adjective1: madLibItems[2].value, noun: madLibItems[3].value, animal: madLibItems[4].value, vegetable: madLibItems[5].value, color: madLibItems[6].value, adjective2: madLibItems[7].value};
    var x = 0;
    //Check if any fields are not filled in
    for(x in madLibObject){
        console.log(madLibObject[x]);
        if (madLibObject[x] == ''){
            document.getElementById('madlib').innerHTML = 'Please Fill In All Fields!';
            return 0;
        }
    }
    //Print the User's Input
    for (x in madLibObject){
        var listItem = document.createElement('li');
        var node = document.createTextNode('You Entered: ' + madLibObject[x]);
        listItem.appendChild(node);
        var element = document.getElementById('userInput');
        element.appendChild(listItem);
    }
    //Print the Madlib
    var container = madLibObject['container'];
    var adj1 = madLibObject['adjective1'];
    var noun = madLibObject['noun'];
    var animal = madLibObject['animal'];
    var vegetable = madLibObject['vegetable'];
    var color = madLibObject['color'];
    var adj2 = madLibObject['adjective2'];
    document.getElementById('madlib').innerHTML = 'Make sure your lunch ' + container + ' is filled with nutritious ' + adj1 + ' food. Do not go to the food stand across the street. The hamburgers they serve are fried in ' + noun + ' and are made of ' + animal + ' meat. So take a sandwich made of ' + vegetable + ' it is much healthier! Drink ' + color + ' milk instead of ' + adj2 + ' colas!';
}

function iconPrint(){
    //Remove All Elements From DIVS
    var myNode = document.getElementById('whileIcons');
    while(myNode.firstChild){
        myNode.removeChild(myNode.firstChild);
    }
    //Store Start Value
    var start = document.getElementById('startValue').value;
    console.log(start);
    //Store End Value
    var end = document.getElementById('endValue').value;
    console.log(end);
    var htmlText = '';
    //Check that values are numbers
    if(!(isInt(start)) || !(isInt(end))){
        document.getElementById('warning').innerHTML = 'Invalid Start Or End Value';
    }
    //Check that start is less than end
    else if(start > end){
        document.getElementById('warning').innerHTML = 'Invalid Start Value';
        console.log(start-end);
    }
    //Check if values are within limit
    else if((end - start) > 100){
        document.getElementById('warning').innerHTML = 'Invalid End Value.';
        console.log(end-start);
    }
    else{
        console.log(end-start);
        //Perform a while loop
        while(start < end){
            document.getElementById('warning').innerHTML = '';
            var icon = document.createElement('i');
            icon.className = "fas fa-shield-alt fa-5x";
            var element = document.getElementById('whileIcons');
            element.appendChild(icon);
            start++;
        }
    }
}