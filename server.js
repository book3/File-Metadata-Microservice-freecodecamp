var express=require('express');
var bodyParser = require('body-parser');
var cors= require('cors');
var multer = require('multer');
var upload = multer({dest:'uploads/'});
var app = module.export = express();
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/public'));

app.post('/upload',upload.single('file'),function(req,res){
  res.json(req.file);
});



const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
