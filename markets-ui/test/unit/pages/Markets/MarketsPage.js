define([
    'chai',
    'sinon',
    'app/domain/Markets',
    'app/pages/Markets/MarketsPage',
    'app/widgets/markets/MarketsModalWidget'
], function(chai, sinon, Markets, MarketsPage, MarketsModalWidget) {
    var assert = chai.assert,
        marketsPageView;

    before(function() {
        marketsPageView = new MarketsPage();
    });

    describe('Markets Page', function() {
        it('renders the right element and id attribute', function() {
            assert.equal(marketsPageView.el.tagName.toLowerCase(), 'section');
            assert.equal(marketsPageView.el.id, 'markets-page');
        });

        it('initialize', function() {
            assert.instanceOf(marketsPageView.markets, Markets);
        });

        it('postRender adds the right number of child views', function() {
            marketsPageView.render();

            assert.equal(Object.keys(marketsPageView.children).length, 2);
        });

        it('addMarket creates marketsModalWidget', function() {
            marketsPageView.render();

            marketsPageView.$('.js-addMarket').trigger('click');

            assert.instanceOf(marketsPageView.marketsModalWidget, MarketsModalWidget);
        });

        it('addMarket allows a marketsModalWidget to be removed', function() {
            marketsPageView.render();

            var spy = sinon.spy($.prototype, 'remove');

            marketsPageView.$('.js-addMarket').trigger('click');

            $('#marketsModal').trigger('hidden.bs.modal');

            sinon.assert.calledOn(spy, marketsPageView.marketsModalWidget.$el);

            $.prototype.remove.restore();
        });
    });
});