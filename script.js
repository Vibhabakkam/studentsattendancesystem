function addstudent(){
    alert("working")
    var studentName = document.getElementById("addingstudents").value;
    console.log(studentName,"studentName" )

    var StudentList = JSON.parse(localStorage.getItem("StudentList")) || [];

    StudentList.push({nameofstudent : studentName, attendance : []} )

    localStorage.setItem("StudentList", JSON.stringify(StudentList));
    document.getElementById("addingstudents").value ="";
    markingAttendance();
    displayStudentlist();
} 

function displayStudentlist(){
    //taking data from storage
    var StudentList = JSON.parse(localStorage.getItem('StudentList'))
    console.log(StudentList,"StudentList")

    //taking tags from html
    var divFromHTML = document.getElementById("displayStudentlist")
    console.log(divFromHTML,"divFromHTML")

    //looping  over userlist to create perfect structure
    var students = [];
    for (var i = 0; i< StudentList.length;i++){
        students += `<div><p>${StudentList[i].nameofstudent}</p>
        </div>`
    }

    console.log(students,"students")
    divFromHTML.innerHTML = students;
} 
displayStudentlist()

function getRealTime(){
    var dateAndTime = new Date();
    var date = dateAndTime.toJSON().slice(0,10);
    var addDate = document.getElementById("datehere");
    addDate.innerText = date;
}
getRealTime();

function markingAttendance(){
    var StudentList = JSON.parse(localStorage.getItem('StudentList'))
    console.log(StudentList,"StudentList")

    var divFromHTML = document.getElementById("markingAttendance")
    console.log(divFromHTML,"divFromHTML")

    var students = [];
    for (var i = 0; i< StudentList.length;i++){
        students += `<div id="presentdiv" ><p>${StudentList[i].nameofstudent}</p><p><i onclick="present(${i})" class="fa-solid fa-check"></i></p><p><i onclick="absent(${i})" class="fa-solid fa-xmark"></i></p></div>`
    }

    console.log(students,"students")
    divFromHTML.innerHTML = students;
} 
markingAttendance();
function present(index){
   console.log("index",index)
   var dateAndTime = new Date();
    var date = dateAndTime.toJSON().slice(0,10);

}

function absent(index){
    alert("working on absent")
    var dateAndTime = new Date();
     var date = dateAndTime.toJSON().slice(0,10);
 
 }