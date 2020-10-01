const express = require('express');

const path = require('path');

const app = express();

/*app.use(express.static(__dirname+'/dist/ng-blog'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/ng-blog/index.html'));
});
app.listen(process.env.PORT || 8080);*/
// Serve only the static files form the dist directory    
app.use(express.static('./dist/examenes'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/examenes/'}),
);
  

// Start the app by listening on the default Heroku port    
app.listen(process.env.PORT || 8080);