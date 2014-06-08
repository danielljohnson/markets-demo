define([
    'chai',
    'sinon',
    'app/domain/Market',
    'app/domain/Markets',
    'app/widgets/markets/MarketsTableWidget'
], function(chai, sinon, Market, Markets, MarketsTableWidget) {
    var assert = chai.assert,
        marketsTableWidget;

    before(function() {
        marketsTableWidget = new MarketsTableWidget({
            collection: new Markets()
        });
    });

    describe('Markets Table Widget', function() {
        it('renders the right element and class attribute', function() {
            assert.equal(marketsTableWidget.el.tagName.toLowerCase(), 'table');
            assert.equal(marketsTableWidget.el.className, 'table js-marketsTable');
        });
    });
});