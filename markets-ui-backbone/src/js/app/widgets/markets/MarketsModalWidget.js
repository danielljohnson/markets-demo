define([
    'app/domain/Repository',
    'keel/BaseView',
    'text!app/widgets/markets/MarketsModalTemplate.html',
    'bootstrap',
    'backbone.stickit'
], function(Repository, BaseView, MarketsModalTemplate) {
    'use strict';

    return BaseView.extend({
        tagName: 'div',

        id: 'marketsModal',

        className: 'modal fade',

        attributes: {
            'role': 'dialog'
        },

        template: {
            name: 'MarketsModalTemplate',
            source: MarketsModalTemplate
        },

        events: {
            'click .js-marketsFormSave': 'marketsFormSave',
            'click .js-marketsFormClose': 'marketsFormClose'
        },

        bindings: {
            'input#name': 'name',

            'select#currency': {
                observe: 'currency',
                selectOptions: {
                    collection: Repository.getCurrencies(),
                    labelPath: 'description',
                    valuePath: 'id',
                    defaultOption: {label: 'Select One', value: ''}
                }
            },

            'select#location': {
                observe: 'location',
                selectOptions: {
                    collection: Repository.getLocations(),
                    labelPath: 'name',
                    valuePath: 'id',
                    defaultOption: {label: 'Select One', value: ''}
                }
            },

            'input#start_date': 'start_date',

            'input#end_date': 'end_date'
        },

        initialize: function(options) {
            // set mode to create or update
            this.mode = options.mode;

            // bind model validation to view
            Backbone.Validation.bind(this);

            // listen for invalid event and show errors
            this.listenTo(this.model, 'validated:invalid', this.showErrors);

            // save model attributes so we can revert if the model is closed without a save
            this.clonedAttributes = _.clone(this.model.attributes);

            _.bindAll(this, 'marketsFormDone');
        },

        postRender: function() {
            this.stickit();

            return this;
        },

        showErrors: function(model, errors) {
            this.$('.alert-danger .errors').text(JSON.stringify(errors));
            this.$('.alert-danger').fadeIn();
        },

        marketsFormSave: function(e) {
            e.preventDefault();

            var isValid = this.model.isValid(true);

            if (isValid) {
                this.model.save().done(this.marketsFormDone);
            }
        },

        marketsFormDone: function() {
            if (this.mode === 'create') {
                this.collection.add(this.model);
            }

            $(this.el).modal('hide');
        },

        marketsFormClose: function() {
            // revert to previous attributes
            this.model.set(this.clonedAttributes);

            $('#marketsModal').modal('hide');
        }
    });
});