var express = require('express');
var router = express.Router();
var Task=require('../models/Message');

/* Send a message */
router.post('/sendmessage',function(req,res,next){
 
    Message.addMessage(req.body,function(err,count){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(req.body);
        }
    });
});

/* Get history for a single contact */
router.get('/gethistory:id?',function(req,res,next){
     
    Message.getHistoryForSingleContact(req.params.id,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

/* Delete a message by id */
router.delete('/:id',function(req,res,next){
     
    Message.deleteMessage(req.params.id,function(err,count){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(count);
        }
    });
});

module.exports = router;
