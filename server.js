const
  express = require('express'),
  app = express(),
  port = process.env.PORT || 4200,
  bodyParser = require('body-parser'),
  ExperiencesRouter = require('./routes/experiencesrouter.js'),
  GuestsRouter = require('./routes/guestsrouter.js'),
  path = require('path');

//MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/experiences', ExperiencesRouter);
app.use('/guests', GuestsRouter);
app.use(express.static(path.resolve(__dirname, './client/build')));

//ROUTES
app.get('/', (req, res)=>{
  res.json({message: 'THIS IS THE HOME ROUTE'});
});

app.get('*', (req, res) => {
  if (isXhr(req)) {
    res.status(404).json({error: 'not found'});
  } else {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
  }
});


//PORT
app.listen(port, ()=>{
  console.log(`Server is listening on port ${port}`);
});

// https://stackoverflow.com/a/28540611
const isXhr = req => req.xhr || req.headers.accept.indexOf('json') > -1;
// this works for checking Axios requests but not every AJAX library
