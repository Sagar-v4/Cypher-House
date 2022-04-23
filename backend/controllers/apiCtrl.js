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
        if (method == 'e') {

            await Algorithm.findByIdAndUpdate(
                algo._id, {
                used: algo.used + 1,
            });
            res.send(encrypt(req?.body?.str));

        }
        else if (method == 'd') {

            await Algorithm.findByIdAndUpdate(
                algo._id, {
                used: algo.used + 1,
            });
            res.send(decrypt(req?.body?.str));
        } else
            console.log("API method not found");
    } else {
        console.log("API not found");
    }
});

module.exports = {
    apiCtrl,
};