// ----------------------------------------------------------------
//  API
// ----------------------------------------------------------------

const apiCtrl = (req, res) => {

    const {encrypt, decrypt} = require(`../algorithms/${req?.body?.api}`);

    console.log(encrypt(req?.body?.str));
    res.send(decrypt(req?.body?.str));

};

module.exports = {
    apiCtrl,
};