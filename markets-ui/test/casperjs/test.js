var baseUrl = 'http://127.0.0.1/~djohn3/markets-demo/markets-ui/src/';

casper.test.begin('Add Market', 6, function suite(test) {
    casper.start(baseUrl + '#markets', function() {
        this.viewport(1024, 768);
        test.assertTitle('Markets');
    });
    
    casper.waitForSelector('.js-addMarket', function() {
        casper.click('.js-addMarket');
    });
    
    // wait for modal to fade in
    casper.wait(2000);

    casper.then(function() {
        this.fill('form.js-marketsForm', {
            name: 'test',
            location_id: '1',
            currency_id: '1'
        }, false);
        
        test.assertField('name', 'test');
        test.assertField('location_id', '1');
        test.assertField('currency_id', '1');
        
        casper.click('.js-marketsFormSave');
    });
    
    // wait for modal to fade out
    casper.wait(2000);
    
    casper.then(function() {
        test.assertElementCount('.js-marketsTable tbody tr', 1);
        test.assertSelectorHasText('.js-marketsTable tbody tr:nth-child(1) td:nth-child(1)', 'test');
    });

    casper.run(function() {
        test.done();
    });
});

casper.test.begin('Edit Market', 6, function suite(test) {    
    casper.start(baseUrl + '#markets', function() {
        this.viewport(1024, 768);
        test.assertTitle('Markets');
    });
    
    casper.waitForSelector('.js-marketsTable tbody tr:nth-child(1) td:nth-child(6) a.js-edit', function() {
        casper.click('.js-marketsTable tbody tr:nth-child(1) td:nth-child(6) a.js-edit');
    });
    
    // wait for modal to fade in
    casper.wait(2000);

    casper.then(function() {
        this.fill('form.js-marketsForm', {
            name: 'test2'
        }, false);
        
        test.assertField('name', 'test2');
        test.assertField('location_id', '1');
        test.assertField('currency_id', '1');
        
        casper.click('.js-marketsFormSave');
    });
    
    // wait for modal to fade out
    casper.wait(2000);
    
    casper.then(function() {
        test.assertElementCount('.js-marketsTable tbody tr', 1);
        test.assertSelectorHasText('.js-marketsTable tbody tr:nth-child(1) td:nth-child(1)', 'test2');
    });

    casper.run(function() {
        test.done();
    });
});

casper.test.begin('Delete Market', 3, function suite(test) {
    casper.start(baseUrl + '#markets', function() {
        this.viewport(1024, 768);
        test.assertTitle('Markets');
    });
    
    casper.waitForSelector('.js-marketsTable tbody tr:nth-child(1) td:nth-child(6) a.js-delete', function() {
        casper.click('.js-marketsTable tbody tr:nth-child(1) td:nth-child(6) a.js-delete');
    });
    
    casper.then(function() {
        test.assertElementCount('.js-marketsTable tbody tr', 0);
    });
    
    casper.reload(function() {
        casper.waitForSelector('.js-marketsTable tbody', function() {
            test.assertElementCount('.js-marketsTable tbody tr', 0);
        });
    });

    casper.run(function() {
        test.done();
    });
});