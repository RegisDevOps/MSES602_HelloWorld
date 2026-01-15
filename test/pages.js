var server = require('../app.js');

describe('server', function () {
  before(function () {
    server.listen(8082);
  });

  after(function () {
    server.close();
  });
});

var assert = require('assert'),
    http = require('http');

describe('/', function () {
  it('should return 200', function (done) {
    this.timeout(5000);
    http.get('http://127.0.0.1:8082/', function (res) {   
      assert.equal(200, res.statusCode);
      done();
    });
  });

  it('should say "Hello World."', function (done) {
    this.timeout(5000);    
    http.get('http://127.0.0.1:8082/', function (res) {
    var data = '';

    res.on('data', function (chunk) {
      data += chunk;
    });

    res.on('end', function () {
      var n = data.indexOf("World.");
      console.log(data);
      assert(n > 0);
      done();
    });
  });
});
});
