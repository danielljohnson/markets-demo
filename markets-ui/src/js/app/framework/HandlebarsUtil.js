/**
 * Copyright 2013 Archfirst
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * app/framework/HandlebarsUtil
 *
 * Utility functions for Handlebars
 *
 * @author Naresh Bhatia
 */
define(
    [
        'app/domain/Repository',
        'handlebars'
    ],
    function(Repository) {
        'use strict';

        return {
            registerHelpers: function() {
                Handlebars.registerHelper('isActive', function(route) {
                    return (Backbone.history.fragment === route) ? 'active' : '';
                });
        
                Handlebars.registerHelper('modalTitle', function(model_id, model_name) {
                    return (typeof model_id === 'undefined') ? 'Create Market' : 'Edit ' + model_name;
                });
                
                Handlebars.registerHelper('getCurrencyDesc', function(currency_id) {
                    return Repository.getCurrencies().get(currency_id).get('description');
                });
                
                Handlebars.registerHelper('getLocationName', function(location_id) {
                    return Repository.getLocations().get(location_id).get('name');
                });
            }
        };
    }
);