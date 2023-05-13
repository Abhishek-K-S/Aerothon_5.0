const app = require('express')();
const server = require('http').createServer(app);
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
require('dotenv').config();
require('./mongoConnect')()

const PORT = process.env.PORT || 5174

const corsOption = {
    origin: ['http://localhost:5173'],
    credentials: true,
} 
app.use(cors(corsOption))
app.use(bodyParser.json())
app.use(cookieParser())

const authRoutes = require('./routes')

app.use(authRoutes)

server.listen(PORT, ()=>{
    console.log('server is listening at port ', + PORT)
})