const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./config/db/dbConnect");
const adminRoutes = require("./route/adminRoute");
const apiRoutes = require("./route/apiRoute");
const contactRoutes = require("./route/contactRoute");
const algorithmRoutes = require("./route/algorithmRoute");
const { errorHandler, notFound } = require("./middlewares/error/errorHandler");
const path = require("path");

dotenv.config({ path: "./.env" });
const app = express();




//DB connection
dbConnect();

//Middleware
app.use(express.json());

app.use("/admin", adminRoutes);
app.use("/algorithm", algorithmRoutes);
app.use("/api", apiRoutes);
app.use("/contact", contactRoutes);
//errorHandler
//catch error beloe route
// app.use(notFound);  // must put before errorHandler if using notFound
// app.use(errorHandler);

//test_questions
// app.post("/test_questions", (req, res) => {
//     //business logic
//     res.json({ user: "user Login" });
// });

// //Login
// app.post("/api/faculties/login",(req, res) => {
//     //business logic
//     res.json({user: "user Login"});
// });


// //fetch all faculties
// app.get("/api/faculties",(req, res) => {
//     //business logic
//     res.json({user: "fetch all faculties"});
// });
const static_path = path.join(__dirname,"public");
app.use(express.static(static_path));
app.set('view engine','hbs');


app.get("/adminAdd.html",(req,res)=>{
    res.render('adminAdd')
});

app.get("/adminAddAlgo.html",(req,res)=>{
    res.render('adminAddAlgo')
});
app.get("/adminDashboard.html",(req,res)=>{
    res.render('adminDashboard')
});
app.get("/adminEditProfile.html",(req,res)=>{
    res.render('adminEditProfile')
});

app.get("/adminViewAlgo.html",(req,res)=>{
    res.render('adminViewAlgo')
});


app.get("/adminViewProfile.html",(req,res)=>{
    res.render('adminViewProfile')
});

app.get("/changePassword.html",(req,res)=>{
    res.render('changePassword')
});

app.get("/contactUs.html",(req,res)=>{
    res.render('contactUs')
});

app.get("/changePassword.html",(req,res)=>{
    res.render('changePassword')
});

app.get("/",(req,res)=>{
    res.render('index')
});

app.get("/login.html",(req,res)=>{
    res.render('login')
});


app.get("/logout.html",(req,res)=>{
    res.render('logout')
});
app.get("/otp_verification.html",(req,res)=>{
    res.render('otp_verification')
});

app.get("/updatePassword.html",(req,res)=>{
    res.render('updatePassword')
});

app.get("/viewAlgo.html",(req,res)=>{
    res.render('viewAlgo')
});


console.log(static_path);
//server
const PORT = 5000;
app.listen(PORT, console.log(`Server is running on port ${PORT}`));