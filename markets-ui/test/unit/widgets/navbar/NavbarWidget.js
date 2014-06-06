define([
    'chai',
    'sinon',
    'app/widgets/navbar/NavbarWidget'
], function(chai, sinon, NavbarWidget) {
    var assert = chai.assert,
        navbarWidget;

    before(function() {
        navbarWidget = new NavbarWidget();
    });

    describe('Navbar Widget', function() {
        it('renders the right element and id attribute', function() {
            assert.equal(navbarWidget.el.tagName.toLowerCase(), 'div');
            assert.equal(navbarWidget.el.className, 'navbar navbar-inverse navbar-fixed-top');
        });
    });
});