const express = require('express'),
      app = express(),
      bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/geturl",function(req,res,next){
    console.log(req.body);
    res.send("response");
});

app.post("/posturl",function(req,res,next){
    console.log(req.body);
    res.send("response");
});

app.listen(9000, () => {
    console.log('Server is up in 9000 port!')
})