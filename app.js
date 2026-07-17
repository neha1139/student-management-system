const express=require("express");
const path=require("path");
const db = require("./database/connection");
const app=express();

//express.static() is middleware that tells Express to serve static files such as HTML, CSS, JavaScript, images, and fonts from a specified folder.
app.use(express.static("public"));
//express.json() is middleware that parses incoming JSON data from the request body and converts it into a JavaScript object. This allows us to access the data using req.body. Without it, req.body will be undefined for JSON requests.
app.use(express.json());

//display login page 
app.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname,"public","add-student.html"));
});

//add student
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


//read students
app.get("/students",(req,res)=>{
   const sql="SELECT * FROM students";
   db.query(sql,(err,result)=>{
    if(err){
        console.log(err);
        return res.status(500).json({
            success:"false",
            message:"failed to fetch students"
        });
    }
    res.json(result);
   });
});



app.get("/students/:id",(req,res)=>{
const id = req.params.id;
const sql="SELECT * FROM students WHERE id = ?";
db.query(sql,[id],(err,result)=>{
if(err){
    console.log(err);
    return res.status(500).json({
        success:"false",
        message:"failed to fetch student"
    });
}
res.json(result[0]);
});
});

//update students 
app.put("/students/:id",(req,res)=>{
const id=req.params.id;
const data=req.body;

const sql=`UPDATE students 
SET 
name=?,email=?,phone=?,course=?,semester=?,gender=?,dob=?,address=? WHERE id=?`;

const values=[
    data.name,
    data.email,
    data.phone,
    data.course,
    data.semester,
    data.gender,
    data.dob,
    data.address,
    id
];

db.query(sql,values,(err,result)=>{
    if(err){
        return res.status(500).json({
            success:"false",
            message:"Failed to update student"
        });
    }
    res.json({
        success:"true",
        message:"Student updated successsfully"
    });
});
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
});