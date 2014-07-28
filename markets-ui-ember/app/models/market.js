import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    currency: DS.belongsTo('currency'),
    location: DS.belongsTo('location'),
    start_date: DS.attr('date'),
    end_date: DS.attr('date')
});