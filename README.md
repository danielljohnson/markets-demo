Markets Demo
============

Steps to run the API
--------------------

Create a mysql database using schema.sql in markets-api

Install node modules

    npm install
    npm install -g http-server
    
Start the server at localhost:3000

    node src/app.js


Steps to run the UI
-------------------

Install bower components

    bower install

Install node modules

    npm install

Start the server at localhost:8080

    http-server ./src

  
Steps to run the UI tests
-------------------------

Intall node modules

    npm install -g cucumber
    npm install -g casperjs
    npm install -g phantomjs
    npm install -g mocha-phantomjs
    npm install -g karma-cli

Install selenium server and chrome driver (see selenium website for details), add to system path

run api tests in markets-api

    mocha --reporter spec

run webdriverjs tests

    grunt webdriverjs --browser=chrome
    grunt webdriverjs --browser=phantomjs
    
run casperjs tests

    grunt casper:all
    
run cucumber tests

    grunt cucumber
    
run mocha unit tests using karma and generate code coverage reports with istanbul

    grunt unit
    
JSCover (assumes you've downloaded the JSCover-1.0.7 directory in the root of the project)

    java -jar JSCover-1.0.7/target/dist/JSCover-all.jar -ws --document-root=markets-ui --report-dir=markets-ui/test/target --no-instrument=/src/js/keel/ --no-instrument=/bower_components/ --no-instrument=/node_modules/ --no-instrument=/test/
    
then browse to http://localhost:8080/jscoverage.html?test/unit/specRunner.html
