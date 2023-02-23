function addstudent(){
    alert("working")
    var studentName = document.getElementById("addingstudents").value;
    console.log(studentName,"studentName" )

    var StudentList = JSON.parse(localStorage.getItem("StudentList")) || [];

    StudentList.push(studentName)

    localStorage.setItem("StudentList", JSON.stringify(StudentList));
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
        students += `<div><p>${StudentList[i]}</p></div>`
    }

    console.log(students,"students")
    divFromHTML.innerHTML = students;
} 
displayStudentlist()


function markingAttendance(){
    var StudentList = JSON.parse(localStorage.getItem('StudentList'))
    console.log(StudentList,"StudentList")

    var divFromHTML = document.getElementById("markingAttendance")
    console.log(divFromHTML,"divFromHTML")

    var students = [];
    for (var i = 0; i< StudentList.length;i++){
        students += `<div><p>${StudentList[i]}</p></div>`
    }

    console.log(students,"students")
    divFromHTML.innerHTML = students;
} 
markingAttendance()
