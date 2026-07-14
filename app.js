const express=require("express");
const path=require("path");
const db = require("./database/connection");
const app=express();

//express.static() is middleware that tells Express to serve static files such as HTML, CSS, JavaScript, images, and fonts from a specified folder.
app.use(express.static("public"));
//express.json() is middleware that parses incoming JSON data from the request body and converts it into a JavaScript object. This allows us to access the data using req.body. Without it, req.body will be undefined for JSON requests.
app.use(express.json());


app.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname,"public","add-student.html"));
});

app.post("/students",(req,res)=>{
console.log(req.body);
   const sql = `
    INSERT INTO students
    (name, email, phone, course, semester, gender, dob, address)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    

    const values = [
        req.body.name,
        req.body.email,
        req.body.phone,
        req.body.course,
        req.body.semester,
        req.body.gender,
        req.body.dob,
        req.body.address
    ];
    
    db.query(sql,values,(err,result)=>{
        if(err){
            console.log(err);
            return res.status(500).json({
                success:false,
                message:"Failed to add student"
            });
        }
        console.log("Student added successfully");
        res.json({
            success:true,
            message:"Student added successfully!"
        });
    });
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
});