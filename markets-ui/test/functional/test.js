var webdriverjs = require('webdriverjs');
var assert = require('assert');

describe('Markets', function() {

    this.timeout(15000);
    var client = {};
    var baseUrl = 'http://127.0.0.1/~djohn3/gmi-training/dan/markets-ui/src/';

    before(function() {
      client = webdriverjs.remote({ desiredCapabilities: { browserName: 'chrome' } });
      client
          .init()
          .windowHandleSize({width: 1024, height: 768})
    });

    it('Go to home Page', function(done) {
        client
            .url(baseUrl)
            .getTitle(function(err, title) {
                assert(err === null);
                assert(title === 'Markets');
            })
            .waitFor('h1')
            .getText('h1', function(err, result) {
                assert(err === null);
                assert(result === 'Home Page');
            })
            .call(done);
    });
    
    it('Go to markets Page', function(done) {
        client
            .url(baseUrl + '#markets')
            .getTitle(function(err, title) {
                assert(err === null);
                assert(title === 'Markets');
            })
            .waitFor('h1')
            .getText('h1', function(err, result) {
                assert(err === null);
                assert(result === 'Markets');
            })
            .call(done);
    });
    
    it('Create Market', function(done) {
        client
            .url(baseUrl + '#markets')
            .waitFor('.js-addMarket')
            .click('.js-addMarket')
            .pause(2000) // wait for modal to fadeIn
            .setValue('#name', 'test')
            .click('#location option[value="Asia"]')
            .click('#currency option[value="JPY"]')
            .click('.js-marketsFormSave')
            .pause(2000) // wait for modal to fadeOut
            .call(done);
    });
    
    it('Edit Market', function(done) {
        client
            .url(baseUrl + '#markets')
            .waitFor('.js-marketsTable tbody tr:nth-child(1) td:nth-child(6)')
            .click('.js-marketsTable tbody tr:nth-child(1) td:nth-child(6) a.js-edit')
            .pause(2000) // wait for modal to fadeIn
            .setValue('#name', 'another test')
            .click('.js-marketsFormSave')
            .pause(2000) // wait for modal to fadeOut
            .getText('.js-marketsTable tbody tr:nth-child(1) td:nth-child(1)', function(err, result) {
                assert(err === null);
                assert(result === 'another test');
            })
            .call(done);
    });
    
    it('Delete Market', function(done) {
        client
            .url(baseUrl + '#markets')
            .waitFor('.js-marketsTable tbody tr:nth-child(1) td:nth-child(6)')
            .click('.js-marketsTable tbody tr:nth-child(1) td:nth-child(6) a.js-delete')
            .call(done);
    });

    after(function(done) {
        client.end(done);
    });
});