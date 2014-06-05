define(
    [
        'keel/BaseView',
        'text!app/widgets/markets/MarketsRowTemplate.html'
    ],
    function(BaseView, MarketsRowTemplate) {
        'use strict';

        return BaseView.extend({
            tagName: 'tr',

            template: {
                name: 'MarketsRowTemplate',
                source: MarketsRowTemplate
            }
        });
    }
);