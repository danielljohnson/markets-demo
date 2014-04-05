'use strict';

var assert = require('assert');

function HomePage() {
  this.World = require('../../support/world.js').World;
  
  this.Given(/^that I am on the homepage$/, function(next) {
    this.client
      .url('http://127.0.0.1/~djohn3/portfolio-dashboard/portfolio-ui/src/index.html')
      .call(next);
  });

  this.Then(/^the browser title should be "([^"]*)"$/, function(arg1, next) {
    this.client
      .getTitle(function(err, title) {
        assert(err === null);
        assert(title === 'Portfolio Dashboard');
        next();
    });
  });

  this.Then(/^the h1 tag should have a value of "([^"]*)"$/, function(arg1, next) {
    this.client
      .waitFor('h1')
      .getText('h1', function(err, result) {
          assert(err === null);
          assert(result === 'Home Page');
          next();
      })
  });
};

module.exports = HomePage;