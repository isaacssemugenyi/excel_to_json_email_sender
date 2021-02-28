const express = require('express');
const { upload } = require('./config/fileProcessing');
const { emailSending } = require('./config/email');
const { readData } = require('./config/readExcel')
const app = express()

app.use(express.urlencoded({extended: false}))

app.post('/data', upload.single('excel'), (req, res, next) => {
    readData('uploads/excel.xlsx', emailSending )
    res.send('Messages sent successfully')  
})


app.listen(3000, ()=> console.log(`Server started on port 3000`))







