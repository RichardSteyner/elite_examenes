//const express = require('express');

//const path = require('path');

//const app = express();

/*app.use(express.static(__dirname+'/dist/ng-blog'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/ng-blog/index.html'));
});
app.listen(process.env.PORT || 8080);*/
// Serve only the static files form the dist directory    
/*app.use(express.static('./dist/examenes'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/examenes/'}),
);
  

// Start the app by listening on the default Heroku port    
app.listen(process.env.PORT || 8080);*/
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/examenes'));
app.listen(process.env.PORT || 8080);

//PATH LOCATION STARTEGY

app.get('/*', function(req,res){
  const fullPath = path.join(__dirname + '/dist/examenes/index.html');
  console.log(" Fetching from.." + fullPath);
    res.sendFile(fullPath);
})

console.log('Server started running..');