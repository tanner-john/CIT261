/****************************
 * Student Page Functions
 ***************************/

//Student Class
var Student = function(fname, lname, id) {
    this.id = id;
    this.fname = fname;
    this.lname = lname;
}

//Classroom array of Students
var classroom = new Array;

// Create new student object
function addItem(){
    var fname = document.getElementById('fName').value;
    var lname = document.getElementById('lName').value;
    var id = document.getElementById('sID').value;
    var student = new Student(fname, lname, id);
    classroom.push(student);
    document.getElementById('fName').value = document.getElementById('fName').defaultValue;
    document.getElementById('lName').value = document.getElementById('lName').defaultValue;
    document.getElementById('sID').value = document.getElementById('sID').defaultValue;
    addStudent();
}

//Dynamically add new student to the page
function addStudent(){
    var lastStudent = (classroom.length - 1);

    var newRow = document.createElement('div');
    newRow.classList += 'w3-row w3-center w3-margin-top w3-border';
    newRow.setAttribute('id', 'student' + lastStudent);

    var newCol1 = document.createElement('div');
    newCol1.classList += 'w3-col l3 w3-center';
    var para = document.createElement('p');
    var fNameText = document.createTextNode(classroom[lastStudent].fname);
    para.appendChild(fNameText);
    newCol1.appendChild(para);
    newRow.appendChild(newCol1);

    var newCol2 = document.createElement('div');
    newCol2.classList += 'w3-col l3 w3-center';
    var para2 = document.createElement('p');
    var lNameText = document.createTextNode(classroom[lastStudent].lname);
    para2.appendChild(lNameText);
    newCol2.appendChild(para2);
    newRow.appendChild(newCol2);

    var newCol3 = document.createElement('div');
    newCol3.classList += 'w3-col l3 w3-center';
    var para3 = document.createElement('p');
    var studentID = document.createTextNode(classroom[lastStudent].id);
    para3.appendChild(studentID);
    newCol3.appendChild(para3);
    newRow.appendChild(newCol3);

    var newCol4 = document.createElement('div');
    newCol4.classList += 'w3-col l3 w3-center';
    var assignButton = document.createElement('BUTTON');
    assignButton.classList += 'w3-btn w3-green w3-round gradeBtn';
    assignButton.innerHTML = 'Grades';
    assignButton.setAttribute('onclick', 'assignmentPage(classroom[' + lastStudent + '])');
    newCol4.appendChild(assignButton);
    newRow.appendChild(newCol4);

    document.getElementById('pageDynamics').appendChild(newRow);
}

/****************************
 * Assignments Page Functions
 ***************************/

//Assignment Class
var Assignment = function(aName, ppValue) {
    this.aName = aName;
    this.ppValue = ppValue;
}

//aList Array of Assignments
var aList = new Array();

//Handle Initial Dynamic Web Page Changes
function assignmentPage(student){
    document.getElementById('pageHeading').innerHTML = '<strong>Assignments Page</strong>';
    document.getElementById('pageInput').innerHTML =   "<h3><strong>New Assignment Information</strong><h3><br>\
                                                        <input type='text' value='Assignment Name' id='aName' onfocus='removeText(this)' onblur='checkValue(this)'>\
                                                        <input type='text' value='Possible Points' id='ppValue' onfocus='removeText(this)' onblur='checkValue(this)'>\
                                                        <button class='w3-btn w3-green w3-round aBtn' onclick='createAssignment()'>Add Assignment</button><br>";

    document.getElementById('pageSelection').innerHTML =    "<h3><strong>Assignments</strong></h3><br>\
                                                            <h4>Name: <strong>" + student.fname + " " + student.lname + "</strong></h4>\
                                                            <div class='w3-row'>\
                                                                <div class='w3-col l6 w3-center w3-margin-bottom'>\
                                                                    <button class='w3-btn w3-green w3-round' onclick='saveAssignments()'>SAVE ASSIGNMENTS</button>\
                                                                </div>\
                                                                <div class='w3-col l6 w3-center w3-margin-bottom'>\
                                                                    <button class='w3-btn w3-green w3-round' onclick='saveGrades(" + student + ")'>SAVE GRADES</button>\
                                                                </div>\
                                                            </div>";
    document.getElementById('pageDynamics').innerHTML = "<div class='w3-row'>\
                                                            <div class='w3-col l3 w3-center w3-grey w3-border-green w3-bottombar w3-topbar w3-leftbar w3-rightbar'>\
                                                                <h4><strong>Name</strong></h4>\
                                                            </div>\
                                                            <div class='w3-col l3 w3-center w3-grey w3-border-green w3-bottombar w3-topbar w3-leftbar w3-rightbar''>\
                                                                <h4><strong>Earned</strong></h4>\
                                                            </div>\
                                                            <div class='w3-col l3 w3-center w3-grey w3-border-green w3-bottombar w3-topbar w3-leftbar w3-rightbar''>\
                                                                <h4><strong>Possible</strong></h4>\
                                                            </div>\
                                                            <div class='w3-col l3 w3-center w3-grey w3-border-green w3-bottombar w3-topbar w3-leftbar w3-rightbar''>\
                                                                <h4><strong>Percent</strong></h4>\
                                                            </div>\
                                                        </div>";
    loadAssignments();
    loadGrades(student);
}

//Create new Assignment
function createAssignment(){
    var aName = document.getElementById('aName').value;
    var ppValue = document.getElementById('ppValue').value;
    var assignment = new Assignment(aName, ppValue);
    aList.push(assignment);
    addAssignment();
}

//Add new Assignment to the page
function addAssignment(){
    //Counter Variable
    var lastAssignment = (aList.length - 1);

    //New Row
    var newRow = document.createElement('div');
    newRow.classList += 'w3-row w3-center w3-margin-top w3-border';
    newRow.setAttribute('id', 'assignment' + lastAssignment);

    //Assignment Name
    var newCol1 = document.createElement('div');
    newCol1.classList += 'w3-col l3 w3-center';
    var para = document.createElement('p');
    var aNameText = document.createTextNode(aList[lastAssignment].aName);
    para.appendChild(aNameText);
    newCol1.appendChild(para);
    newRow.appendChild(newCol1);

    //Input for Earned Points
    var newCol2 = document.createElement('div');
    newCol2.classList += 'w3-col l3 w3-center appInput';
    var input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'ePoints' + lastAssignment);
    input.setAttribute('value', '0');
    input.setAttribute('onfocus', 'removeText(this)');
    input.setAttribute('onblur', 'checkValue(this)');
    input.setAttribute('onchange', 'updateTotal(aList[' + lastAssignment + '])');
    newCol2.appendChild(input);
    newRow.appendChild(newCol2);

    //Possible Points
    var newCol3 = document.createElement('div');
    newCol3.classList += 'w3-col l3 w3-center';
    var para3 = document.createElement('p');
    var ppValueText = document.createTextNode(aList[lastAssignment].ppValue);
    para3.appendChild(ppValueText);
    newCol3.appendChild(para3);
    newRow.appendChild(newCol3);

    //Total
    var newCol4 = document.createElement('div');
    newCol4.classList += 'w3-col l3 w3-center';
    var para4 = document.createElement('p');
    para4.setAttribute('id', 'total' + lastAssignment);
    var percent = document.createTextNode('0 %');
    para4.appendChild(percent);
    newCol4.appendChild(para4);
    newRow.appendChild(newCol4);

    document.getElementById('pageDynamics').appendChild(newRow);
}

function updateTotal(assignment){
    var x = aList.indexOf(assignment);
    var y = document.getElementById('ePoints' + x).value;
    var total = (y / assignment.ppValue) * 100;
    document.getElementById('total' + x).innerHTML = total + ' %';
}

/****************************
 * Grades Functions
 ***************************/

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

/****************************
 * Local Storage Functions
 ***************************/
function saveStudentList(){
    localStorage.class = JSON.stringify(classroom);
}

function saveAssignments(){
    localStorage.assignments = JSON.stringify(aList);
}

function saveGradeList(){
    localStorage.grades = JSON.stringify(grades);
}

function loadStudentList(){
    if(localStorage.class){
        classroom = JSON.parse(localStorage.class);
        for(var i = 0; i < classroom.length; i++){

            var newRow = document.createElement('div');
            newRow.classList += 'w3-row w3-center w3-margin-top w3-border';
            newRow.setAttribute('id', 'student' + i);

            var newCol1 = document.createElement('div');
            newCol1.classList += 'w3-col l3 w3-center';
            var para = document.createElement('p');
            var fNameText = document.createTextNode(classroom[i].fname);
            para.appendChild(fNameText);
            newCol1.appendChild(para);
            newRow.appendChild(newCol1);
        
            var newCol2 = document.createElement('div');
            newCol2.classList += 'w3-col l3 w3-center';
            var para2 = document.createElement('p');
            var lNameText = document.createTextNode(classroom[i].lname);
            para2.appendChild(lNameText);
            newCol2.appendChild(para2);
            newRow.appendChild(newCol2);
        
            var newCol3 = document.createElement('div');
            newCol3.classList += 'w3-col l3 w3-center';
            var para3 = document.createElement('p');
            var studentID = document.createTextNode(classroom[i].id);
            para3.appendChild(studentID);
            newCol3.appendChild(para3);
            newRow.appendChild(newCol3);
        
            var newCol4 = document.createElement('div');
            newCol4.classList += 'w3-col l3 w3-center';
            var assignButton = document.createElement('BUTTON');
            assignButton.classList += 'w3-btn w3-green w3-round gradeBtn';
            assignButton.innerHTML = 'Grades';
            assignButton.setAttribute('onclick', 'assignmentPage(classroom[' + i + '])');
            newCol4.appendChild(assignButton);
            newRow.appendChild(newCol4);

            document.getElementById('pageDynamics').appendChild(newRow);
        }
    }
}

function loadAssignments(){
    if(localStorage.assignments){
        aList = JSON.parse(localStorage.assignments);
        for(var i = 0; i < aList.length; i++){
            //New Row
            var newRow = document.createElement('div');
            newRow.classList += 'w3-row w3-center w3-margin-top w3-border';
            newRow.setAttribute('id', 'assignment' + i);

            //Assignment Name
            var newCol1 = document.createElement('div');
            newCol1.classList += 'w3-col l3 w3-center';
            var para = document.createElement('p');
            var aNameText = document.createTextNode(aList[i].aName);
            para.appendChild(aNameText);
            newCol1.appendChild(para);
            newRow.appendChild(newCol1);

            //Input for Earned Points
            var newCol2 = document.createElement('div');
            newCol2.classList += 'w3-col l3 w3-center appInput';
            var input = document.createElement('input');
            input.setAttribute('type', 'text');
            input.setAttribute('id', 'ePoints' + i);
            input.setAttribute('value', '0');
            input.setAttribute('onfocus', 'removeText(this)');
            input.setAttribute('onblur', 'checkValue(this)');
            input.setAttribute('onchange', 'updateTotal(aList[' + i + '])');
            newCol2.appendChild(input);
            newRow.appendChild(newCol2);

            //Possible Points
            var newCol3 = document.createElement('div');
            newCol3.classList += 'w3-col l3 w3-center';
            var para3 = document.createElement('p');
            var ppValueText = document.createTextNode(aList[i].ppValue);
            para3.appendChild(ppValueText);
            newCol3.appendChild(para3);
            newRow.appendChild(newCol3);

            //Total
            var newCol4 = document.createElement('div');
            newCol4.classList += 'w3-col l3 w3-center';
            var para4 = document.createElement('p');
            para4.setAttribute('id', 'total' + i);
            var percent = document.createTextNode('0 %');
            para4.appendChild(percent);
            newCol4.appendChild(para4);
            newRow.appendChild(newCol4);

            document.getElementById('pageDynamics').appendChild(newRow);
        }
    }
}

function loadGrades(student){
    if(localStorage.grades){
        grades = JSON.parse(localStorage.grades);

    }
}