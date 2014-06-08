define([
    'backbone',
    'chai',
    'app/framework/HandlebarsUtil',
    'app/domain/Repository'
], function(Backbone, chai, HandlebarsUtil, Repository) {
    var assert = chai.assert,
        helpers;

    beforeEach(function() {
        HandlebarsUtil.registerHelpers();

        helpers = Handlebars.helpers;
    });

    describe('HandlebarsUtil', function() {
        it('isActive true', function() {
            Backbone.history.fragment = 'home';

            assert.strictEqual(helpers.isActive('home'), 'active');
        });

        it('isActive false', function() {
            Backbone.history.fragment = '';

            assert.strictEqual(helpers.isActive('home'), '');
        });

        it('modalTitle create', function() {
            assert.strictEqual(helpers.modalTitle(), 'Create Market');
        });

        it('modalTitle edit', function() {
            assert.strictEqual(helpers.modalTitle(1, 'test'), 'Edit test');
        });

        it('getCurrencyDesc', function() {
            var currencies = Repository.getCurrencies();

            currencies.add({
                'id': 1,
                'name': 'USD',
                'description': 'US Dollar'
            });

            assert.strictEqual(helpers.getCurrencyDesc(1), 'US Dollar');

            currencies.reset();
        });

        it('getLocationName', function() {
            var locations = Repository.getLocations();

            locations.add({
                'id': 1,
                'name': 'Asia'
            });

            assert.strictEqual(helpers.getLocationName(1), 'Asia');

            locations.reset();
        });
    });
});