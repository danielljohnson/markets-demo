var assert = require('assert');
var supertest = require('supertest');
var api = supertest('http://localhost:3000');

// mocha --bail --reporter spec

// store id once market is created
var marketId;

describe('GET /markets', function() {
  it('respond with an empty list in json format', function(done) {
    api
      .get('/markets')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /json/)
      .expect(function(res) {
        if (res.body.length > 0) throw new Error('Markets table is not empty');
      })
      .expect(200, done);
  });
});

describe('POST /markets', function() {
  it('does not creates a market if there\'s no name', function(done) {
    api
      .post('/markets')
      .set('Content-Type', 'application/json')
      .send({})
      .expect(500, done);
  });
  
  it('creates a market', function(done) {
    api
      .post('/markets')
      .set('Content-Type', 'application/json')
      .send({
        market: {
          name: 'Test Market',
          start_date: '2014-08-03 21:04:04'
        }
      })
      .expect(201)
      .end(function(err, res) {
        marketId = res.body.id;
        done()
      });
  });
});

describe.skip('GET /markets/:id', function() {
  it('sends a 404 if the market is not found', function(done) {
    api
      .get('/markets/100')
      .set('Content-Type', 'application/json')
      .expect(404, done);
  });
  
  it('gets the market', function(done) {
    api
      .get('/markets/' + marketId)
      .set('Content-Type', 'application/json')
      .expect(function(res) {
        if (res.body.market.name !== 'Test Market') throw new Error('Fail');
      })
      .expect(200, done);
  });
});

describe.skip('PUT /markets/:id', function() {
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

describe.skip('GET /markets/:id', function() {
  it('gets the right market with updated name', function(done) {
    api
      .get('/markets/' + marketId)
      .set('Content-Type', 'application/json')
      .expect(function(res) {
        if (res.body.market.name !== 'Test Market 2') throw new Error('Fail');
      })
      .expect(200, done);
  });
});

describe.skip('DELETE /markets/:id', function() {
  it('deletes the market', function(done) {
    api
      .del('/markets/' + marketId)
      .expect(200, done);
  });
});