const http = require('http');
const sleep = require('then-sleep');
const { serve } = require('micro');

const server = new http.Server(
  serve(async (req, res) => {
    await sleep(500);
    return 'Hello world';
  }),
);

server.listen(8888, () => console.log('Micro is Listening on localhost:8888'));