const http = require( 'http' );
const server = http.createServer(function(req, res) {
  console.log('made a request');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('I am sending some plain text here to show things work');
  res.end();
});
const port = process.env.PORT || 3001;

server.listen(port, () => { console.log(`listening on port ${port}`) });

/* note:  run this file using nodemon
  and test the request using curl:

  curl http://localhost:3001
    response:
              I am sending some plain text here to show things work

  if you want the entire response, you can use the -i flag:

  curl http://localhost:3001 -i
    response:
              HTTP/1.1 200 OK
              Content-Type: text/plain
              Date: Sun, 28 May 2017 22:08:12 GMT
              Connection: keep-alive
              Transfer-Encoding: chunked

              I am sending some plain text here to show things work

*/
