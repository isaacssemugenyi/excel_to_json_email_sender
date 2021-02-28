const readXlsxFile = require('read-excel-file/node');

const map = { 'Name': 'name', 'Email': 'email', 'Amount': 'amount' }

exports.readData = (filePath, cb, next) => {
    readXlsxFile(filePath , { map }).then(({ rows }) => {
    rows.map(eachRow => {
        cb(eachRow.email, eachRow.name, eachRow.amount, next)
    })
})
}