
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
        })
        .catch(error=>{
            console.log(error);
        })
        });