http=require('http');
url=require('url');
querystring=require('querystring');
function onRequest(request,response)
{
    var path=url.parse(request.url).pathname;
    console.log("URL"+url);
    var query=url.parse(request.url).query;
    console.log("QUERY"+query);
    
    var name1=querystring.parse(query)["name"];
    var name2=querystring.parse(query)["emp_id"];
    var name3=querystring.parse(query)["Organization"];
    var name4=querystring.parse(query)["exp"];
    var name5=querystring.parse(query)["email"];
    var name6=querystring.parse(query)["mobile"];
    var name7=querystring.parse(query)["gender"];
    var name8=querystring.parse(query)["branch"];
    response.write("Name     :"+name1+"  \n\nEmployee ID :"+name2+" \n\nOrganization  : "+name3+" \n\nExperience   : "+name4+" \n\nEmail:    "+name5+" \n\nMobile : "+name6+" \n\nGender :   "+name7+" \n\nBranch :  "+name8);
    response.end();
}
http.createServer(onRequest).listen(8080);