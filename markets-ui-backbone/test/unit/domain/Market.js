define([
    'backbone',
    'chai',
    'sinon',
    'app/domain/Market',
    'backbone.validation'
], function(Backbone, chai, sinon, Market) {
    var assert = chai.assert,
        market;

    beforeEach(function() {
        _.extend(Backbone.Model.prototype, Backbone.Validation.mixin);

        market = new Market();
    });

    describe('Market Model', function() {
        it('validation passes if required attributes are set', function() {
            market.set('name', 'test');
            market.set('location_id', 1);
            market.set('currency_id', 1);

            var isValid = market.isValid(true);

            assert.equal(isValid, true);
        });

        it('validation fails if required attributes are not set', function() {
            var isValid = market.isValid(true);

            assert.equal(isValid, false);
        });

        it('makes a fetch to the server', function() {
            var market = new Market({
                id: 1
            });

            var server = sinon.fakeServer.create();
            var callback = sinon.spy();

            var response = {
                "id": "1",
                "name": "test"
            };

            server.respondWith(
                'GET',
                'http://localhost:3000/markets/1',
                [
                    200,
                    {
                        'Content-Type': 'application/json'
                    },
                    JSON.stringify(response)
                ]
            );

            market.fetch({
                success: function(model, response, options) {
                    callback(response);
                }
            });

            server.respond();

            // test the raw reponse
            sinon.assert.calledWith(callback, response);

            // test that the name attribute is set
            assert.equal(market.get('name'), 'test');

            server.restore();
        });
    });
});