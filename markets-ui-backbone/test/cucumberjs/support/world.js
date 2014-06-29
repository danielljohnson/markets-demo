var webdriverjs = require('webdriverjs');

var World = function World(callback) {
    'use strict';
  
    var client = webdriverjs.remote({
        desiredCapabilities: {
          browserName: 'phantomjs'
        },
        logLevel: 'silent'
    });
  
    var world = {
        client: client
    };

    callback(world);
};

exports.World = World;