const nodemailer = require('nodemailer');

module.exports.sent = async (req, res) => {

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
        to: "202112114@daiict.ac.in",// list of receivers
        subject: req.body.subject, // Subject line
        html: '<td class="esd-stripe" align="center"><table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="700"><tbody> <tr> <td class="esd-structure es-p40t es-p20b es-p20r es-p20l" align="left" esd-custom-block-id="334499"> <table cellpadding="0" cellspacing="0" width="100%"><tbody> <tr><td width="660" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%"> <tbody><tr> <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank"><img src="https://tlr.stripocdn.email/content/guids/CABINET_2663efe83689b9bda1312f85374f56d2/images/10381620386430630.png" alt style="display: block;" width="100"></a> </td></tr><tr><td align="center" class="esd-block-text"> <h2>Login credentials for&nbsp;&nbsp;signing up</h2> </td> </tr><tr><td align="center" class="esd-block-spacer es-p10t es-p10b es-m-txt-c" style="font-size:0"><table border="0" width="40%" height="100%" cellpadding="0" cellspacing="0" style="width: 40% !important; display: inline-table;"><tbody><tr>td style="border-bottom: 1px solid #cccccc; background:none; height:1px; width:100%; margin:0px 0px 0px 0px;"></td></tr></tbody></table></td> </tr> <tr><td align="center" class="esd-block-text es-p5t es-p5b es-p40r es-m-p0r" esd-links-underline="none"><p>Contact us </p><p><br></p><p>Your Mail Id :&nbsp;<strong><a target="_blank" href="" style="text-decoration: none;">' + req.body.name + '</a></strong>&nbsp;<br>Your Message:' + req.body.message + '</p></td></tr><tr><td align="center" class="esd-block-spacer es-p10t es-p10b es-m-txt-c" style="font-size:0"><table border="0" width="40%" height="100%" cellpadding="0" cellspacing="0" style="width: 40% !important; display: inline-table;"><tbody><tr><td style="border-bottom: 1px solid #cccccc; background:none; height:1px; width:100%; margin:0px 0px 0px 0px;"></td></tr></tbody></table></td></tr><tr><td align="center" class="esd-block-button es-p10t es-p10b es-m-txt-l"><span class="es-button-border"style="background: #ffffff;"></span></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td>'  //plain text body
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err);
        else
            console.log(info);
        res.status(200).send({ message: "Submit Successful", status: 201 });
    });
}
