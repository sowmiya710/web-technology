var http=require('http');
var querystring=require('querystring');
http.createServer(function(req,res)
{
        var data1='';
        req.on('data',function (chunk)
        { 
             data1+=chunk;
        });
        req.on('end',function()
        {
               qs=querystring.parse(data1);
    var name1= qs["name"];
    var name2= qs["emp_id"];
    var name3= qs["Organization"];
    var name4= qs["exp"];
    var name5= qs["email"];
    var name6= qs["mobile"];
    var name7= qs["gender"];
    var name8= qs["branch"];
    res.write(`Name :${name1}  \n\nEmployee ID :${name2} \n\nOrganization  : ${name3} \n\nExperience   : ${name4} \n\nEmail:    ${name5} \n\nMobile : ${name6} \n\nGender :   ${name7} \n\nBranch :  ${name8}`);
    res.end();
        });
}).listen (8080);