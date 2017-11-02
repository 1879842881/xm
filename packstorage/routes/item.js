var express = require('express');
var router = express.Router();
var mysql=require('mysql');
var con=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'root',
    database:'ly'

});

/* GET home page. */
router.post('/li',function(req,res,next){
    var title=req.body.title;
    var zuo=req.body.zuo;
    var list=req.body.list;
    console.log(title,zuo,list);
    res.header('Access-Control-Allow-Origin','*');
    con.query('INSERT INTO xiao(title,name,datail) VALUES ("'+title+'","'+zuo+'","'+list+'")',function(err,data){
        res.send(data)
        //console.log(data)
    })
});
router.post('/deil',function(req,res){
    res.header('Access-Control-Allow-Origin','*');
    con.query('SELECT * FROM xiao',function(err,data){
        res.send(data)
        console.log(data)
    })
});

module.exports = router;
