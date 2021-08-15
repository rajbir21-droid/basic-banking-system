const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const connectDB = require('./db/conn');
const dotenv = require('dotenv')
dotenv.config({path:'./config.env'});
connectDB();
// console.log(process.env.MONGOURI)

const app = express()


app.use(express.json({ extended: false }))

app.use('/api/customers', require('./routes/customers'))
app.use('/api/transaction', require('./routes/transactions'))

//app.use(express.static(path.join(__dirname, 'client', 'build')))

/*app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})*/
if(process.env.NODE_ENV==="production"){
  app.use(express.static("client/build"));
}
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started at port ${PORT}`))
