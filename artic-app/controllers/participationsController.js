var express = require('express');
var router = express.Router();
var services = require('./../services/_services.js');
var sftp = require('./../config/ftp.js');


var multer  = require('multer')
var storage = multer.memoryStorage()
var upload = multer({ storage: storage })


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


router.post('/', upload.single('file'), function (req, res, next) {
    req.body.user = req.user.id;

    sftp.connect(sftp.lunaConnection).then(() => {
          sftp.put( req.file.buffer, "/ftp/participation_img_"+ req.body.user + '_'+"."+ req.body.challenge+req.file.originalname.split('.').pop());
      }).then((data) => {
          services.participation.postParticipation(req.body, "http://luna-1.lbseed.es/participation_img_"+ req.body.user + '_'+ req.body.challenge+"."+req.file.originalname.split('.').pop()).then(function(result){
            res.json("Fichero subido correctamente");
          }).catch(function(error){
              res.send(error);
          });

      }).catch((err) => {
          console.log(err, 'catch error');
          res.send(error);
      });
})






module.exports = router;
