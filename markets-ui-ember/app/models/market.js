import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    currency_id: DS.attr('number'),
    location_id: DS.attr('number'),
    start_date: DS.attr('date'),
    end_date: DS.attr('date')
});