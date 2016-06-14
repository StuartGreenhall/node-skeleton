var request = require('supertest'),
    should = require('should');

var app = require('../../app.js');

describe('GET /private/ping', function() {

    it('should return a 200', function(done) {
        request(app)
        .get('/private/ping')
        .expect(200)
        .expect('Cache-Control', "no-cache, no-store, must-revalidate")
        .expect(function(response) {
            response.text.should.eql('pong');
        })
        .end(done);
    });

});
