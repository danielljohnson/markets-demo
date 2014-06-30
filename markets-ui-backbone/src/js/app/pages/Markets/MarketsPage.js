define([
    'keel/BaseView',
    'app/widgets/navbar/NavbarWidget',
    'app/widgets/markets/MarketsTableWidget',
    'app/widgets/markets/MarketsModalWidget',
    'app/domain/Market',
    'app/domain/Markets',
    'text!app/pages/Markets/MarketsPageTemplate.html'
], function(BaseView, NavbarWidget, MarketsTableWidget, MarketsModalWidget, Market, Markets, MarketsPageTemplate) {
    'use strict';

    return BaseView.extend({
        tagName: 'section',
        id: 'markets-page',

        template: {
            name: 'MarketsPageTemplate',
            source: MarketsPageTemplate
        },

        elements: [
            'markets'
        ],

        events: {
            'click .js-addMarket': 'addMarket'
        },

        initialize: function() {
            this.markets = new Markets();
            this.markets.fetch();
        },

        postRender: function() {
            this.addChildren([
                {
                    id: 'NavbarWidget',
                    viewClass: NavbarWidget,
                    parentElement: this.$el
                },
                {
                    id: 'MarketsTableWidget',
                    viewClass: MarketsTableWidget,
                    parentElement: $(this.marketsElement),
                    options: {
                        collection: this.markets
                    }
                }
            ]);

            return this;
        },

        // events
        addMarket: function(e) {
            e.preventDefault();

            // create model view
            this.marketsModalWidget = new MarketsModalWidget({
                collection: this.markets,
                model: new Market(),
                mode: 'create'
            });

            $('body').append(this.marketsModalWidget.render().$el);

            // remove modal view when it's hidden
            $('#marketsModal').on('hidden.bs.modal', $.proxy(function() {
                this.marketsModalWidget.remove();
            }, this));

            // show modal
            $('#marketsModal').modal('show');
        }
    });
});