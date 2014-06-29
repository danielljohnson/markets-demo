define([
    'chai',
    'sinon',
    'app/domain/Market',
    'app/domain/Markets',
    'app/widgets/markets/MarketsTableWidget'
], function(chai, sinon, Market, Markets, MarketsTableWidget) {
    var assert = chai.assert,
        marketsTableWidget;

    beforeEach(function() {
        marketsTableWidget = new MarketsTableWidget({
            collection: new Markets()
        });
    });

    describe('Markets Table Widget', function() {
        it('renders the right element and class attribute', function() {
            assert.equal(marketsTableWidget.el.tagName.toLowerCase(), 'table');
            assert.equal(marketsTableWidget.el.className, 'table js-marketsTable');
        });

        it('editMarket', function() {
            var e = new $.Event('click');

            var modalSpy = sinon.spy($.prototype, 'modal');

            var market = new Market({
                name: 'test market',
                location_id: 1,
                currency_id: 1
            });

            var stub = sinon.stub(marketsTableWidget.collection, 'get');
            stub.returns(market);

            marketsTableWidget.editMarket(e);

            sinon.assert.calledWith(modalSpy, 'show');

            $.prototype.modal.restore();
            marketsTableWidget.collection.get.restore();
        });

        it('deleteMarket', function() {
            var e = new $.Event('click');

            var market = new Market({
                name: 'test market',
                location_id: 1,
                currency_id: 1
            });

            var getStub = sinon.stub(marketsTableWidget.collection, 'get');
            getStub.returns(market);

            var destroyStub = sinon.stub(market, 'destroy');

            marketsTableWidget.deleteMarket(e);

            sinon.assert.calledOnce(destroyStub);

            marketsTableWidget.collection.get.restore();
            market.destroy.restore();
        });
    });
});