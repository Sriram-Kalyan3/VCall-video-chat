var createError = require('http-errors');
var express = require('express');
const session = require('express-session')
var cookieParser = require('cookie-parser');
var port_number = 3000;

var app = express();
const server = require('http').Server(app)
const io = require('socket.io')(server)

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const streamRouter = require('./routes/vidstream')(io)

//database initialization
var db = require('./database/db')
db.init()

// view engine setup
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));
app.use(session({
	secret: 'keyboard cat',
	resave : false,
	saveUninitialized: true
}))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/stream', streamRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error',{error: err});
});


server.listen(port_number,(err)=>{
  if(!err){
    console.log(`Video call app is listening at ${port_number}`)
  }
})