const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
if(id){
    fetch(`/students/${id}`)
    .then(response=>response.json())
    .then(data=>{
        document.getElementById("name").value = data.name;
        document.getElementById("email").value=data.email;
        document.getElementById("phone").value = data.phone;
        document.getElementById("course").value = data.course;
        document.getElementById("semester").value = data.semester;
        document.getElementById("gender").value = data.gender;
        document.getElementById("dob").value = data.dob;
        document.getElementById("address").value = data.address;
    })
    .catch(error=>{
        console.log(error);
    });
}

const form=document.getElementById("studentForm");


form.addEventListener("submit",function(event){
    event.preventDefault();
    console.log("Form Submitted");



const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const phone = document.getElementById("phone").value;
const course = document.getElementById("course").value;
const semester = document.getElementById("semester").value;
const gender = document.getElementById("gender").value;
const dob = document.getElementById("dob").value;
const address = document.getElementById("address").value;

  const student = {
    name: name,
    email: email,
    phone: phone,
    course: course,
    semester: semester,
    gender: gender,
    dob: dob,
    address: address
};

console.log(student);
if(id){
    fetch(`/students/${id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(student)
    })
    .then(response=>response.json())
    .then(data=>{
        alert(data.message);
        window.location.href="view-students.html"
    })
    .catch(error=>{
        console.log(error);
    });
}
else{


//fetch() is a built-in JavaScript function used to send requests from the browser to the server.
fetch("/students",{
    // "/students"--->This is called the API endpoint or route.
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    //The browser cannot send a JavaScript object directly..So we convert it into a JSON string using:
     //JSON.stringify(student)
    body:JSON.stringify(student)
        })
        .then(response=>response.json())
        .then(data=>{
            alert(data.message);
            window.location.href = "view-students.html";
        })
        .catch(error=>{
            console.log(error);
        });
    }
});