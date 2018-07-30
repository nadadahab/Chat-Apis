var express = require('express');
var router = express.Router();

/* GET users listing */
router.get('/',function(req,res,next){
     
  User.getContactList(req.params.id,function(err,rows){
      if(err)
      {
          res.json(err);
      }
      else{
          res.json(rows);
      }
  });
});

module.exports = router;
