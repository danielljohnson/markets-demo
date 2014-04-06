function hooks() {
  'use strict';
  
  /* jshint validthis: true */
  
  this.Before('@selenium', function(callback) {
    this.client.init().windowHandleSize({width: 1024, height: 768});
    
    callback();
  });
  
  this.After('@selenium', function(callback) {
    this.client.end(function() {
      callback();
    });
  });
  
}

module.exports = hooks;