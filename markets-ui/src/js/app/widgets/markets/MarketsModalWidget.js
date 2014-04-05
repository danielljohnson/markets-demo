define(
    [
        'app/domain/repository',
        'keel/BaseView',
        'text!app/widgets/markets/MarketsModalTemplate.html',
        'bootstrap'
    ],
    function(Repository, BaseView, MarketsModalTemplate) {
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
                
                'select#currency_id': {
                    observe: 'currency_id',
                    selectOptions: {
                        collection: Repository.getCurrencies(),
                        labelPath: 'description',
                        valuePath: 'id',
                        defaultOption: {label: 'Select One', value: ''}
                    }
                },
                
                'select#location_id': {
                    observe: 'location_id',
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
                // bind model validation to view
                Backbone.Validation.bind(this);
                
                // listen for invalid event and show errors
                this.listenTo(this.model, 'validated:invalid', this.showErrors);
                
                // save model attributes so we can revert if the model is closed without a save
                this.clonedAttributes = _.clone(this.model.attributes);
            },
            
            postRender: function() {
                this.stickit();
                
                console.log(this.model)
                
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
                    this.model.save().done(function() {
                        if (this.mode === 'create') {
                            this.collection.add(this.model);
                        }
                        $(this.el).modal('hide');
                    }.bind(this));
                }
            },
            
            marketsFormClose: function(e) {
                // revert to previous attributes
                this.model.set(this.clonedAttributes);
                
                $('#marketsModal').modal('hide');
            }
        });
    }
);