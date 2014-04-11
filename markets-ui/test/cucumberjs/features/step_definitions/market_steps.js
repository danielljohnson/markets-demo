var assert = require('assert');

function Market() {
  'use strict';
  
  /* jshint validthis: true */
  
  this.World = require('../../support/world.js').World;
  
  this.Given(/^that I am on the markets page$/, function (callback) {
    this.client
      .url('http://127.0.0.1/~djohn3/markets-demo/markets-ui/src/#markets')
      .call(callback);
  });

  this.Then(/^the browser title should be "([^"]*)"$/, function (arg1, callback) {
    this.client
      .getTitle(function(err, title) {
        assert(err === null);
        assert(title === arg1);
        callback();
      });
  });
  
  // Add market
  this.When(/^I open the add market modal$/, function (callback) {
    this.client
      .waitFor('.js-addMarket')
      .click('.js-addMarket')
      .pause(2000) // wait for modal to fadeIn
      .call(callback);
  });

  this.When(/^fill in the form$/, function (callback) {
    this.client
      .setValue('#name', 'test')
      .getValue('#name', function(err, value) {
          assert(err === null);
          assert(value === 'test');
      })
      .click('#location_id option[value="1"]')
      .click('#currency_id option[value="1"]')
      .call(callback);
  });

  this.When(/^click submit$/, function (callback) {
    this.client
      .click('.js-marketsFormSave')
      .pause(2000) // wait for modal to fadeOut
      .call(callback);
  });

  this.Then(/^the new market should show up in the table$/, function (callback) {
    this.client
      .elements('.js-marketsTable tbody tr', function(err, elements) {
          assert(err === null);
          assert(elements.value.length === 1);
      })
      .getText('.js-marketsTable tbody tr:nth-child(1) td:nth-child(1)', function(err, result) {
          assert(err === null);
          assert(result === 'test');
      })
      .call(callback);
  });
  
  // Edit Market
  this.When(/^I click the edit link on the first table row$/, function (callback) {
    this.client
        .waitFor('.js-marketsTable tbody tr:nth-child(1) td:nth-child(6)')
        .click('.js-marketsTable tbody tr:nth-child(1) td:nth-child(6) a.js-edit')
        .pause(2000) // wait for modal to fadeIn
        .call(callback);
  });

  this.When(/^change the market name in the modal form$/, function (callback) {
    this.client
        .setValue('#name', 'test2')
        .click('.js-marketsFormSave')
        .pause(2000) // wait for modal to fadeOut
        .call(callback);
  });

  this.Then(/^the updated market should show up in the table$/, function (callback) {
    this.client
        .elements('.js-marketsTable tbody tr', function(err, elements) {
            assert(err === null);
            assert(elements.value.length === 1);
        })
        .getText('.js-marketsTable tbody tr:nth-child(1) td:nth-child(1)', function(err, result) {
            assert(err === null);
            assert(result === 'test2');
        })
        .call(callback);
  });
  
  // Delete market
  this.When(/^I click the delete link on the first table row$/, function (callback) {
    this.client
        .waitFor('.js-marketsTable tbody tr:nth-child(1) td:nth-child(6)')
        .click('.js-marketsTable tbody tr:nth-child(1) td:nth-child(6) a.js-delete')
        .call(callback);
  });

  this.Then(/^the market is deleted$/, function (callback) {
    this.client
        .elements('.js-marketsTable tbody tr', function(err, elements) {
            assert(err === null);
            assert(elements.value.length === 0);
        })
        .call(callback);
  });
}

module.exports = Market;