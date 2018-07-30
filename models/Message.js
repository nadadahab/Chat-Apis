var db=require('../dbconnection'); //connection
var Message ={
    addMessage:function(Message,callback){
        return db.query("Insert into message values(?,?,?)",[Message.from_user_id,Message.to_user_id,Message.message],callback);
        },
    getHistoryForSingleContact:function(id,callback){
        return db.query("select 'message' from message where from_user_id=?",[id],callback);
        },
    deleteMessage:function(id,callback){
        return db.query("delete from message where id=?",[id],callback);
        },

}
