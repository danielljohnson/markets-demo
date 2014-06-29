/**
 * Copyright 2012 Archfirst
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
 * keel/Http
 *
 * Helper for making HTTP requests that don't require a backbone model or collection
 *
 * @module Http
 * @author Daniel Johnson
 */
define(function() {

    'use strict';

    var Http = function() {
        var methods = ['get', 'post', 'put', 'delete'];

        for (var i = 0; i < methods.length; i++) {
            this[methods[i]] = (function(name) {
                return function() {
                    var params = {
                        url: arguments[0],
                        type: name.toUpperCase()
                    };

                    if (!!arguments[1]) {
                        $.extend(params, arguments[1]);
                    }

                    return $.ajax(params);
                }
            })(methods[i]);
        }
    }

    return Http;
});