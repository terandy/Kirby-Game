let express = require('express')
let app = express()

app.use('/static',express.static(__dirname+"/images"))
app.use('/',express.static(__dirname+"/public"))

app.listen(4000,console.log("server started"))
