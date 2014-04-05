var assert = require('assert');

describe('Markets', function() {
    var baseUrl = 'http://127.0.0.1/~djohn3/markets-demo/markets-ui/src/';
    
    before(function() {
        browser.windowHandleSize({width: 1024, height: 768})
    })
    
    after(function(done) {
        browser.end(done);
    });
    
    describe('Page titles and headers', function() {
        it('home page', function(done) {
            browser
                .url(baseUrl)
                .getTitle(function(err, title) {
                    assert(err === null);
                    assert(title === 'Markets');
                })
                .waitFor('h1')
                .getText('h1', function(err, text) {
                    assert(err === null);
                    assert(text === 'Home Page');
                })
                .call(done);
        });
        
        it('markets page', function(done) {
            browser
                .url(baseUrl + '#markets')
                .getTitle(function(err, title) {
                    assert(err === null);
                    assert(title === 'Markets');
                })
                .waitFor('h1')
                .getText('h1', function(err, text) {
                    assert(err === null);
                    assert(text === 'Markets');
                })
                .call(done)
        });
    });
    
    describe('Create Market', function() {
        it('launch modal', function(done) {
            browser
                .url(baseUrl + '#markets')
                .waitFor('.js-addMarket')
                .click('.js-addMarket')
                .pause(2000) // wait for modal to fadeIn
                .call(done);
        });
        
        it('fill in and submit form', function(done) {
            browser
                .setValue('#name', 'test')
                .getValue('#name', function(err, value) {
                    assert(err === null);
                    assert(value === 'test');
                })
                .click('#location_id option[value="1"]')
                .click('#currency_id option[value="1"]')
                .click('.js-marketsFormSave')
                .pause(2000) // wait for modal to fadeOut
                .call(done)
        });
        
        it('test title of new market', function(done) {
            browser
                .getText('.js-marketsTable tbody tr:nth-child(1) td:nth-child(1)', function(err, result) {
                    console.log(err)
                    assert(err === null);
                    assert(result === 'test');
                })
                .call(done)
        });
    });
    
    describe('Edit Market', function() {
        it('launch modal', function(done) {
            browser
                .url(baseUrl + '#markets')
                .waitFor('.js-marketsTable tbody tr:nth-child(1) td:nth-child(6)')
                .click('.js-marketsTable tbody tr:nth-child(1) td:nth-child(6) a.js-edit')
                .pause(2000) // wait for modal to fadeIn
                .call(done);
        });
        
        it('fill in and submit form', function(done) {
            browser
                .setValue('#name', 'test2')
                .click('.js-marketsFormSave')
                .pause(2000) // wait for modal to fadeOut
                .call(done)
        });
        
        it('test title of updated market', function(done) {
            browser
                .getText('.js-marketsTable tbody tr:nth-child(1) td:nth-child(1)', function(err, result) {
                    assert(err === null);
                    assert(result === 'test2');
                })
                .call(done)
        });
    });
    
    describe('Delete Market', function() {
        it('delete market', function(done) {
            browser
                .url(baseUrl + '#markets')
                .waitFor('.js-marketsTable tbody tr:nth-child(1) td:nth-child(6)')
                .click('.js-marketsTable tbody tr:nth-child(1) td:nth-child(6) a.js-delete')
                .call(done);
        });
        
        it('test market is deleted', function(done) {
            browser
                .elements('.js-marketsTable tbody tr', function(err, elements) {
                    assert(err === null);
                    assert(elements.value.length === 0);
                })
                .call(done);
        });
    });
});