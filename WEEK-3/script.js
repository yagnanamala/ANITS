// Array
let students = [];

// Display students
function displayStudents(){

    let list = document.getElementById("studentList");

    list.innerHTML = "";

    for(let i=0; i<students.length; i++){

        list.innerHTML += `
        <li>
            ${students[i]}
            <button class="delete" onclick="deleteStudent(${i})">
                Delete
            </button>
        </li>
        `;
    }

    document.getElementById("count").innerHTML = students.length;
}

// Add student
function addStudent(){

    let input = document.getElementById("studentName");

    let name = input.value;

    if(name == ""){
        alert("Enter student name");
        return;
    }

    students.push(name);

    input.value = "";

    displayStudents();
}

// Delete student
function deleteStudent(index){

    students.splice(index,1);

    displayStudents();
}
