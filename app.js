var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var cors = require('cors')
if(process.env.USING_HEROKU == false)
	require('dotenv').config() // Disable Heroku .env for Privacy On Github

var indexRouter = require('./routes/index')
var apiRouter   = require('./routes/api')

var app = express()

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

// app.use(limit15)
// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))


app.get('/api/v1/*', function (req, res, next) {
	let nextred = req.originalUrl.replace('/v1/', '/');
    res.redirect(307, (process.env.USING_HEROKU == true ? "https://freerestapi.herokuapp.com" : process.env.S_HOST) + nextred);
});

app.use('/', indexRouter);
app.use('/api/', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  // render the error page
  res.status(err.status || 500)
  let header = req.header('x-forwarded-proto');
  res.render('error', {layout : false, host: (process.env.USING_HEROKU == true ? "https://freerestapi.herokuapp.com" : process.env.S_HOST), error: err})
})

module.exports = app
