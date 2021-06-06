const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const connectDb = require('./db');
const Router = require('./routes/view')


dotenv.config({path: './config.env'})
const app = express();
connectDb()
app.use(express.json());

app.use('/saveCryptoData', Router)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))
  
    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, '/frontend', 'build', 'index.html'))
    )
  } else {
    app.get('/', (req, res) => {
      res.send('API is running....')
    })
  }


const PORT = process.env.PORT || 5500;
app.listen(PORT, console.log(`app running ${process.env.NODE_ENV} on ${process.env.PORT}`))

