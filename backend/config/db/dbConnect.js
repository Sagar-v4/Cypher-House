const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.ATLAS_URI || process.env.DB_LOCAL_PATH, {
            //useFindAndModify: true,
            useUnifiedTopology: true,
            useNewUrlParser: true,

        });
        console.log('Db is connected successfully');
    } catch (err) {
        console.log(`Error ${err.message}`);
    }
};

module.exports = dbConnect;