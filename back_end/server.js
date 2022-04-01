const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config({ path: '.env' });

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

const uri = process.env.ATLAS_URI || process.env.DB_LOCAL_PATH;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch((err) => {
    console.log(`Connection failed: ${err.message}`);
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

// const homeRouter = require('./routes/home');
const apiListRouter = require('./routes/api-list');
const letsTalkRouter = require('./routes/lets-talk');
// const profileRouter = require('./routes/profile');
const messagesRouter = require('./routes/messages'); 


const authRouter = require('./routes/auth');
const addAdminRouter = require('./routes/addAdmin');


// app.use('/home', homeRouter);
app.use('/api-list', apiListRouter);
app.use('/lets-talk', letsTalkRouter);
// app.use('/profile', profileRouter);
app.use('/messages', messagesRouter);



app.use('/auth', authRouter)
app.use('/addAdmin', addAdminRouter)
