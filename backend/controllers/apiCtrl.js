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

        const user = Algorithm.findByIdAndUpdate(
            algo._id, {

            used: algo.used + 1

        }, function (err, docs) {
            if (err) {
                res.status(404).send(err)
            }
            else {
                res.status(200).send({ docs, status: 200 });
            }
        });

        res.status(404).send("API method not found");
    } else {
        res.status(404).send("API not found");
    }

});

module.exports = {
    apiCtrl,
};