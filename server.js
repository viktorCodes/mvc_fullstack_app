const express = require('express');
const app = express();
const PORT = 8000
const mongoose = require('mongoose');


//*Import functions/routes
const connectDB = require("./config/database")
const homeRoutes = require("./routes/home")
//const editRoutes = require("./routes/edit")

require('dotenv').config({path: './config/.env'})

//todo - Connect to Database
connectDB()


//set middleware
app.set('view engine', 'ejs');
app.set(express.static('public'));
app.use(express.urlencoded({extended: true}));


//todo - Set Routes
app.use('/', homeRoutes)
//app.use('/edit', editRoutes)


// start server
app.listen(PORT, () => {
    console.log(`Amandla ${PORT}, Awethu!`)
})