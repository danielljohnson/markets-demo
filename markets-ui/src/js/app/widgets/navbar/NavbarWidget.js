define([
    'keel/BaseView',
    'text!app/widgets/navbar/NavbarTemplate.html'
], function(BaseView, NavbarTemplate) {
    'use strict';

    return BaseView.extend({
        tagName: 'div',
        className: 'navbar navbar-inverse navbar-fixed-top',

        template: {
            name: 'NavbarTemplate',
            source: NavbarTemplate
        }
    });
});