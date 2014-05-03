markets-demo
============

create a mysql database using schema.sql in markets-api

install the node modules in both markets-api and markets-ui directories 

    npm install

install the following node modules globally

    npm install -g cucumber
    npm install -g mocha-phantomjs phantomjs
    npm install -g karma-cli

install selenium and chrome driver (see selenium website for details), add to system path

install markets-ui vendor files using bower

	bower install

set baseUrl in markets-ui/test/webdriverjs/test.js and markets-ui/test/casperjs/test.js

set appRoot in markets-ui/src/js/app/framework/AppConfig.js

start api server at localhost:3000 by running the following in markets-api

    node src/app.js

run api tests in markets-api

    mocha --reporter spec

run webdriverjs tests using

    grunt webdriverjs --browser=chrome
    grunt webdriverjs --browser=phantomjs
    
run casperjs tests

    grunt casper:all
    
run cucumber tests

    grunt cucumber
    
run unit tests using karma and generate code coverage reports

    grunt unit
    
JSCover

    java -jar JSCover-1.0.7/target/dist/JSCover-all.jar -ws --document-root=markets-ui --report-dir=markets-ui/test/target --no-instrument=/src/js/keel/ --no-instrument=/bower_components/ --no-instrument=/node_modules/ --no-instrument=/test/
    
then browse to http://localhost:8080/jscoverage.html?test/unit/specRunner.html
