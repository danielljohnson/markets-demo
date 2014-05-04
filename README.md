Markets Demo
============

Steps to run the API
--------------------

Create a mysql database using schema.sql in markets-api

Install node modules

    npm install
    
Run tests

    mocha --reporter spec

Start server at localhost:3000

    node src/app.js


Steps to run the UI
-------------------

Install bower components

    bower install

Install node modules

    npm install
    npm install -g http-server

Start server at localhost:8080

    http-server ./src

  
Steps to run the UI tests
-------------------------

Intall node modules

    npm install -g cucumber
    npm install -g casperjs
    npm install -g phantomjs
    npm install -g mocha-phantomjs
    npm install -g karma-cli

Install the selenium server and chrome driver (see selenium website for details), add their directory to system path

Run webdriverjs tests

    grunt webdriverjs --browser=chrome
    grunt webdriverjs --browser=phantomjs
    
Run casperjs tests

    grunt casper:all
    
Run cucumber tests

    grunt cucumber
    
Run unit tests using karma and generate code coverage reports with istanbul

    grunt unit
