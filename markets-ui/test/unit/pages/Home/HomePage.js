define([
    'chai',
    'sinon',
    'app/framework/HandlebarsUtil',
    'app/pages/Home/HomePage'
], function(chai, sinon, HandlebarsUtil, HomePage) {
    var assert = chai.assert,
        homePageView;

    before(function() {
        HandlebarsUtil.registerHelpers();

        homePageView = new HomePage();
    });

    describe('Home Page', function() {
        it('renders the right element and id attribute', function() {
            assert.equal(homePageView.el.tagName.toLowerCase(), 'section');
            assert.equal(homePageView.el.id, 'home-page');
        });

        it('postRender adds the right number of child views', function() {
            homePageView.render();

            assert.equal(Object.keys(homePageView.children).length, 1);
        });
    });
});