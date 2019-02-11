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
    assignButton.onclick = assignmentPage(classroom[lastStudent]);
    newCol4.appendChild(assignButton);
    newRow.appendChild(newCol4);

    document.getElementById('pageDynamics').appendChild(newRow);
}

/****************************
 * Assignments Page Functions
 ***************************/
function assignmentPage(student){
    return 0;
}



/****************************
 * Local Storage Functions
 ***************************/
function removeItem(){
    document.getElementById('list').removeChild(this);
    saveList();
}

function saveList(){
    localStorage.storedList = document.getElementById('pageDynamics').innerHTML;
    localStorage.classroomList = classroom;
}

function loadList(){
    document.getElementById('pageDynamics').innerHTML = localStorage.storedList;
}

function checkList(){
    if(localStorage.storedList){
        loadList();
    }
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