define([
    'chai',
    'sinon',
    'app/framework/HandlebarsUtil',
    'app/domain/Markets',
    'app/pages/Markets/MarketsPage',
    'app/widgets/markets/MarketsModalWidget'
], function(chai, sinon, HandlebarsUtil, Markets, MarketsPage, MarketsModalWidget) {
    var assert = chai.assert;

    before(function() {
        HandlebarsUtil.registerHelpers();

        this.view = new MarketsPage();
    });

    describe('Markets Page', function() {
        it('renders the right element and id attribute', function() {
            assert.equal(this.view.el.tagName.toLowerCase(), 'section');
            assert.equal(this.view.el.id, 'markets-page');
        });

        it('initialize', function() {
            assert.instanceOf(this.view.markets, Markets);
        });

        it('postRender adds the right number of child views', function() {
            this.view.render();

            assert.equal(Object.keys(this.view.children).length, 2);
        });

        it('addMarket creates marketsModalWidget', function() {
            this.view.render();

            this.view.$('.js-addMarket').trigger('click');

            assert.instanceOf(this.view.marketsModalWidget, MarketsModalWidget);
        });

        it('addMarket allows a marketsModalWidget to be removed', function() {
            this.view.render();

            var spy = sinon.spy($.prototype, 'remove');

            this.view.$('.js-addMarket').trigger('click');

            $('#marketsModal').trigger('hidden.bs.modal');

            sinon.assert.calledOn(spy, this.view.marketsModalWidget.$el);

            $.prototype.remove.restore();
        });
    });
});