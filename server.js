const express = require('express');
const app = express();
const PORT = 8000
const mongoose = require('mongoose');





//set middleware
app.set('view engine', 'ejs');
app.set(express.static('public'));
app.use(express.urlencoded({extended: true}));





// start server
app.listen(PORT, () => {
    console.log(`Amandla ${PORT}, Awethu!`)
})