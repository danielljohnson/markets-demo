define(
    [
        'keel/BaseView',
        'app/domain/Market',
        'app/widgets/markets/MarketsRowWidget',
        'app/widgets/markets/MarketsModalWidget',
        'text!app/widgets/markets/MarketsTableTemplate.html',
        'bootstrap'
    ],
    function(BaseView, Market, MarketsRowWidget, MarketsModalWidget, MarketsTableTemplate) {
        'use strict';

        return BaseView.extend({
            tagName: 'table',
            className: 'table js-marketsTable',
            
            template: {
                name: 'MarketsTableTemplate',
                source: MarketsTableTemplate
            },
            
            events: {
                'click .js-edit': 'editMarket',
                'click .js-delete': 'deleteMarket'
            },
            
            initialize: function() {
                this.listenTo(this.collection, 'reset change add remove', this.render);
                
                this.collection.fetch();
            },
            
            postRender: function() {
                var that = this;
                
                this.collection.each(function(market) {
                    that.addChild({
                        viewClass: MarketsRowWidget,
                        parentElement: that.$el.find('tbody'),
                        options: {
                            model: market
                        }
                    });
                });
                
                return this;
            },
            
            // events
            editMarket: function(e) {
                e.preventDefault();
                
                // get selected market
                var market = this.collection.get($(e.target).closest('a').data('id'));
                
                // create model view
                var marketsModalWidget = new MarketsModalWidget({
                    collection: this.collection,
                    model: market,
                    mode: 'update'
                });
                $('body').append(marketsModalWidget.render().$el);
                
                // remove modal view when it's hidden
                $('#marketsModal').on('hidden.bs.modal', function (e) {
                    marketsModalWidget.remove();
                });
                
                // show modal
                $('#marketsModal').modal('show');
            },
            
            deleteMarket: function(e) {
                e.preventDefault();
                
                var market = this.collection.get($(e.target).closest('a').data('id'));
                
                market.destroy();
            }
        });
    }
);