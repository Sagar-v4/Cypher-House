const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./config/db/dbConnect");
const adminRoutes = require("./route/adminRoute");
const apiRoutes = require("./route/apiRoute");
const contactRoutes = require("./route/contactRoute");
const algorithmRoutes = require("./route/algorithmRoute");
const { errorHandler, notFound } = require("./middlewares/error/errorHandler");
const path = require("path");
const admin = require("./model/admin");
const algorithm = require("./model/algorithm");
const fileUpload = require('express-fileupload');

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
app.use(fileUpload({

    useTempFiles: true,
    tempFileDir: '/algorithms/',
}));

app.post("/admin/add", async (req, res) => {

    let fileName = req.body.code;
    let newPath = path.join(process.cwd(), 'algorithms/', fileName);

    req.files.profile.mv(newPath);
    admin.findOne({ email: req.body.email }, (err, result) => {
        if (err) {
            res.status(error.status).send(err);
        }
        else {
            if (!result) {
                res.status(404).send("User not found");
            }
            else {
                if (!result.status) {
                    res.status(404).send("Account blocked");
                }
                else if (result.status && result.isPasswordMatched(req?.body?.currpassword)) {

                    const Algorithm = new algorithm({
                        name: req?.body?.name,
                        type: req?.body?.type,
                        code: req?.body?.code,
                        description: req?.body?.description,
                    });
                    Algorithm.save((err, res) => {
                        if (err)
                            console.log(err);
                        else
                            console.log(res);
                    })
                    var transporter = nodemailer.createTransport({
                        service: 'gmail',
                        host: 'smtp.gmail.com',
                        port: 465,
                        secure: true,
                        auth: {
                            user: process.env.EMAIL,
                            pass: process.env.EMAIL_PASS
                        }
                    });

                    const mailOptions = {
                        from: process.env.EMAIL, // sender address
                        to: req.body.email, // list of receivers
                        subject: 'CypherHouse algorith added', // Subject line
                        html: '<td class="esd-stripe" align="center"><table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="700"><tbody> <tr> <td class="esd-structure es-p40t es-p20b es-p20r es-p20l" align="left" esd-custom-block-id="334499"> <table cellpadding="0" cellspacing="0" width="100%"><tbody> <tr><td width="660" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%"> <tbody><tr> <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank"><img src="https://tlr.stripocdn.email/content/guids/CABINET_2663efe83689b9bda1312f85374f56d2/images/10381620386430630.png" alt style="display: block;" width="100"></a> </td></tr><tr><td align="center" class="esd-block-text"> <h2>Your Algorithm is added</h2> </td> </tr><tr><td align="center" class="esd-block-spacer es-p10t es-p10b es-m-txt-c" style="font-size:0"><table border="0" width="40%" height="100%" cellpadding="0" cellspacing="0" style="width: 40% !important; display: inline-table;"><tbody><tr>td style="border-bottom: 1px solid #cccccc; background:none; height:1px; width:100%; margin:0px 0px 0px 0px;"></td></tr></tbody></table></td> </tr> <tr><td align="center" class="esd-block-text es-p5t es-p5b es-p40r es-m-p0r" esd-links-underline="none"><p>Thank you for choosing CypherHouse.</p><p><br></p><p>Algorithm name :&nbsp;<strong><a target="_blank" href="" style="text-decoration: none;">' + Algorithm.name + '</a></strong>&nbsp;<br>Algorithm code :' + Algorithm.code + '</p></td></tr><tr><td align="center" class="esd-block-spacer es-p10t es-p10b es-m-txt-c" style="font-size:0"><table border="0" width="40%" height="100%" cellpadding="0" cellspacing="0" style="width: 40% !important; display: inline-table;"><tbody><tr><td style="border-bottom: 1px solid #cccccc; background:none; height:1px; width:100%; margin:0px 0px 0px 0px;"></td></tr></tbody></table></td></tr><tr><td align="center" class="esd-block-button es-p10t es-p10b es-m-txt-l"><span class="es-button-border"style="background: #ffffff;"></span></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td>'  //plain text body
                    };

                    transporter.sendMail(mailOptions, function (err, info) {
                        if (err)
                            console.log(err)
                        else
                            console.log(info);

                        res.status(200).send({ message: "mail sent successfully" });
                    });

                }
                else {
                    res.status(404).send("Wrong password");
                }
            }
        }
    })
})

const static_path = path.join(__dirname, "public");
app.use(express.static(static_path));
app.set('view engine', 'hbs');


app.get("/adminAdd.html", (req, res) => {
    res.render('adminAdd')
});

app.get("/adminAddAlgo.html", (req, res) => {
    res.render('adminAddAlgo')
});
app.get("/adminDashboard.html", (req, res) => {
    res.render('adminDashboard')
});
app.get("/adminEditProfile.html", (req, res) => {
    res.render('adminEditProfile')
});

app.get("/adminViewAlgo.html", (req, res) => {
    res.render('adminViewAlgo')
});


app.get("/adminViewProfile.html", (req, res) => {
    res.render('adminViewProfile')
});

app.get("/changePassword.html", (req, res) => {
    res.render('changePassword')
});

app.get("/contactUs.html", (req, res) => {
    res.render('contactUs')
});

app.get("/changePassword.html", (req, res) => {
    res.render('changePassword')
});

app.get("/", (req, res) => {
    res.render('index')
});

app.get("/login.html", (req, res) => {
    res.render('login')
});


app.get("/logout.html", (req, res) => {
    res.render('logout')
});
app.get("/otp_verification.html", (req, res) => {
    res.render('otp_verification')
});

app.get("/updatePassword.html", (req, res) => {
    res.render('updatePassword')
});

app.get("/viewAlgo.html", (req, res) => {
    res.render('viewAlgo')
});


console.log(static_path);
//server
const PORT = 5000;
app.listen(PORT, console.log(`Server is running on port ${PORT}`));