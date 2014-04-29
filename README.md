markets-demo
============

create a mysql database using schema.sql in markets-api

install the node modules in both markets-api and markets-ui directories 

    npm install

install the following node modules globally

    npm install -g cucumber
    npm install -g mocha-phantomjs phantomjs

install selenium and chrome driver (see selenium website for details), add to system path

install markets-ui vendor files using bower

	bower install

set baseUrl in markets-ui/test/webdriverjs/test.js and markets-ui/test/casperjs/test.js

set appRoot in markets-ui/src/js/app/framework/AppConfig.js

start api server at localhost:3000 by running the following in markets-api

    node src/app.js

run api tests in markets-api using

    mocha --reporter spec

run webdriverjs tests using

    grunt webdriverjs --browser=chrome
    grunt webdriverjs --browser=phantomjs
    
run casperjs tests using

    grunt casper:all
    
run cucumber tests using

    grunt cucumber