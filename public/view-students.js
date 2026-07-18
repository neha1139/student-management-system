
 const tableBody = document.getElementById("studentTableBody");

fetch("/students")
    .then(response => response.json())
    .then(data => {
        data.forEach(student => {

    const row = `
        <tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.phone}</td>
            <td>${student.course}</td>
            <td>${student.semester}</td>
            <td>${student.gender}</td>
            <td>${student.dob}</td>
            <td>${student.address}</td>
             <td> 
             <button onclick="editStudent(${student.id})">
                Edit
                </button>
             </td>
             <td>
               <button onclick="deleteStudent(${student.id})">
                Delete
               </button>
             </td>
        </tr>
    `;
        tableBody.innerHTML += row;
});
    })
    .catch(error => {
        console.log(error);
    });


function editStudent(id){
    window.location.href=`add-student.html?id=${id}`;
}

function deleteStudent(id){
    const result=confirm("Are you sure you want to delete this student?");
    if(!result){
        return;
    }
    fetch(`/students/${id}`,{
        method:"DELETE"
    })
    .then(response=>response.json())
    .then(data=>{
        alert(data.message);
        location.reload();
    })
    .catch(error=>{
        console.log(error);
    });
}