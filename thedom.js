var x = 1;
var y = 0;
var replaceMarker = x - 1;
var paraAdded = false;
var paraReplaced = false;

function addpara(){
    //Create a Paragraph Element
    paraAdded = true;
    var para = document.createElement('p');
    para.setAttribute('id', 'para' + x);
    var text = document.createTextNode('This is new paragraph ' + x);
    para.appendChild(text);

    //Add the Element to the DOM
    var element = document.getElementById('paragraphs');
    element.appendChild(para);
    x++;
    replaceMarker++;
    paraReplaced = false;
    console.log('x = ' + x);
    console.log('Replace Marker = ' + replaceMarker);
}

function removepara(){
    var idMarker = x - 1;
    var child = document.getElementById("para" + idMarker);
    child.parentNode.removeChild(child);
    x--;
    console.log('x = ' + x);
    console.log('Replace Marker = ' + replaceMarker);
}

function replacepara(){
    if(paraAdded && paraReplaced == false){
        replaceMarker = x - 1;
    }
    var para = document.createElement("p");
    var text = document.createTextNode('This is a replaced paragraph ' + x);
    para.appendChild(text);
    
    var child = document.getElementById("para" + replaceMarker);
    child.parentNode.replaceChild(para, child);
    replaceMarker--;
    paraReplaced = true;
    console.log('x = ' + x);
    console.log('Replace Marker = ' + replaceMarker);
}

function submit(){
    //Create a Table Row Element
    var tablerow = document.createElement('tr');
    tablerow.setAttribute('id', 'tableRow' + y);
    y++;

    //Create a Table Data Element FirstName
    var tableData1 = document.createElement('td');
    var fname = document.createTextNode(document.getElementById('fname').value);
    tableData1.appendChild(fname);
    tablerow.appendChild(tableData1);

   //Create a Table Data Element LastName
    var tableData2 = document.createElement('td');
    var lname = document.createTextNode(document.getElementById('lname').value);
    tableData2.appendChild(lname);
    tablerow.appendChild(tableData2);
    
   //Create a Table Data Element Occupation
    var tableData3 = document.createElement('td');
    var job = document.createTextNode(document.getElementById('job').value);
    tableData3.appendChild(job);
    tablerow.appendChild(tableData3);

    //Add all elements to the DOM
    var element = document.getElementById('masterTable');
    element.appendChild(tablerow);

    resetData();
}

function insertFirst(){
    //Create a Table Row Element
    var tablerow = document.createElement('tr');
    tablerow.setAttribute('id', 'tableRow' + y);
    y++;

    //Create a Table Data Element
    var tableData1 = document.createElement('td');
    var fname = document.createTextNode(document.getElementById('fname').value);
    tableData1.appendChild(fname);
    tablerow.appendChild(tableData1);

   //Create a Table Data Element
    var tableData2 = document.createElement('td');
    var lname = document.createTextNode(document.getElementById('lname').value);
    tableData2.appendChild(lname);
    tablerow.appendChild(tableData2);
    
   //Create a Table Data Element
    var tableData3 = document.createElement('td');
    var job = document.createTextNode(document.getElementById('job').value);
    tableData3.appendChild(job);
    tablerow.appendChild(tableData3);

    //Add all elements to the DOM
    var element = document.getElementById('masterTable');
    var child = document.getElementById('tableRow0');
    element.insertBefore(tablerow, child);

    resetData();
}

function resetData(){
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('job').value = '';
}