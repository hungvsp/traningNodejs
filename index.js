const express = require('express')
const path = require('path')
const morgan = require('morgan')
const handlebars  = require('express-handlebars')
const routes=require('./src/routes')
const app = express()
const port = 3000
app.use(express.static(path.join(__dirname,'src',"public")))
app.use(express.urlencoded({extended:''}))
app.use(morgan('combined'))
app.engine('hbs', handlebars({extname: '.hbs'}));
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '/src/resources/views'));
routes(app)



app.listen(port, () => {
  console.log(path.join(__dirname,'src','public'))
  console.log(`Example app listening at http://localhost:${port}`)
})