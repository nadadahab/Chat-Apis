var db=require('../dbconnection'); //connection
var User ={
    getContactList:function(callback){
        return db.query("Select * from users",callback); 
    }
    


}