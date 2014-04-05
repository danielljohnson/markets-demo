'use strict';

var webdriverjs = require('webdriverjs');

var World = function World(callback) {
  var client = webdriverjs.remote({
    desiredCapabilities: {
      browserName: 'chrome'
    },
    logLevel: 'silent'
  });
  
  var world = {
    client: client
  };

  callback(world);
};

exports.World = World;