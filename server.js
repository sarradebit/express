const express = require ('express');
//create instance
const app = express();
const pug = require('pug');








const PORT = 4500;
app.listen(PORT , error => {
    if (error) {console.log(error);}
    else {
        console.log(`server listening on ${PORT}`)
    }
})
