var http=require('http');
http.createServer(function(req, res){
    res.write('Brasil 4x0 \n')
    res.end('bom dia');

}).listen(3000);