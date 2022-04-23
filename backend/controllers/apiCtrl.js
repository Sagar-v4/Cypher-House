const Algorithm = require("../model/algorithm");
const expressAsyncHandler = require("express-async-handler");

// ----------------------------------------------------------------
//  API
// ----------------------------------------------------------------

const apiCtrl = expressAsyncHandler(async (req, res) => {

    const algo = await Algorithm.findOne({ code: req?.body?.api });

    if (algo.status == true) {
        const { encrypt, decrypt } = require(`../algorithms/${req?.body?.api}`);

        const method = req?.body?.method;
        if (method == 'e')
            res.send(encrypt(req?.body?.str));
        if (method == 'd')
            res.send(decrypt(req?.body?.str));

        if (method == 'e' || method == 'd') {
            const user = Algorithm.findByIdAndUpdate(
                algo._id, {
                used: algo.used + 1,
            }
            );
        } else
            console.log("API method not found");
    } else {
        console.log("API not found");
    }

});

module.exports = {
    apiCtrl,
};