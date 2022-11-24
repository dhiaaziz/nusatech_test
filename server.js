const express = require('express');
const app = express();
const morgan = require('morgan')
const cors = require('cors')
const router = require('./routes')


//auto excetuting 
const cron = require('./bin/cron')

//middleware
const errorHandler = require('./middlewares/error-handler');


app.use(morgan('dev'))
app.use(cors())
app.use(express.raw())
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/api', router)

app.use(errorHandler)

//handle route yang tidak ada
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: 'URL Not found'
    });
})

const port = 8863
app.listen(port, () => {
	console.log(` telah tersambung pada port : ${port}`)
});