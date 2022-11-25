var http=require('http');
http.createServer(function(req, res){
    res.write('Brasil 2x0 \n')
    res.end('bom dia');

}).listen(3000);
