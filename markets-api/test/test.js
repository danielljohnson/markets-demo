var assert = require('assert');
var supertest = require('supertest');
var api = supertest('http://localhost:3000');

// store _id once market is created
var marketId;

describe('GET /markets', function() {
  it('respond with json', function(done) {
    api
      .get('/markets')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('POST /markets', function() {
  it('creates a market', function(done) {
    api
      .post('/markets')
      .set('Content-Type', 'application/json')
      .send({
        name: 'Test Market'
      })
      .expect(201)
      .end(function(err, res) {
        if (err) {
          return done(err);
        } else {
          marketId = res.body.id;
        }
        done()
      });
  });
});

describe('GET /markets/:id', function() {
  it('gets the right market', function(done) {
    api
      .get('/markets/' + marketId)
      .set('Content-Type', 'application/json')
      .expect(function(res) {
        if (res.body.name !== 'Test Market') throw new Error('Fail');
      })
      .expect(200, done);
  });
});

describe('PUT /markets/:id', function() {
  it('updates a market', function(done) {
    api
      .put('/markets/' + marketId)
      .set('Content-Type', 'application/json')
      .send({
        name: 'Test Market 2'
      })
      .expect(200, done);
  });
});

describe('GET /markets/:id', function() {
  it('gets the right market with updated name', function(done) {
    api
      .get('/markets/' + marketId)
      .set('Content-Type', 'application/json')
      .expect(function(res) {
        if (res.body.name !== 'Test Market 2') throw new Error('Fail');
      })
      .expect(200, done);
  });
});

describe('DELETE /markets/:id', function() {
  it('deletes the market', function(done) {
    api
      .del('/markets/' + marketId)
      .expect(200, done);
  });
});