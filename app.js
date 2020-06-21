require('./config/database')
const express =  require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')

dotenv.config({ path: './config/config.env'})

const app = express ()
// @desc turns on logging of url in the console during developer mode 
if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on PORT: ${PORT}`))