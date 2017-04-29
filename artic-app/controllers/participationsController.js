var express = require('express');
var router = express.Router();
var services = require('./../services/_services.js');

router.get('/:id', function(req, res) {
    services.participation.getParticipation(req.params.id).then(function(result){
        res.json(result);
    }).catch(function(error){
        res.send(error);
    });
});

router.get('/', function(req, res) {
    services.participation.getParticipations().then(function(result){
        res.json(result);
    }).catch(function(error){
        res.send(error);
    });
});

router.post('/', (req, res)=>{
    console.log(req.files); // the uploaded file object

          /*
          //Path where image will be uploaded
          fstream = fs.createWriteStream(__dirname + '/img/' + filename);
          file.pipe(fstream);
          fstream.on('close', function () {
              console.log("Upload Finished of " + filename);
              res.redirect('back');           //where to go next
          });
          */
      //});
  }
)





module.exports = router;
