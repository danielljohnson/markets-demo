markets-demo
============

create mysql database using schema.sql in markets-api

npm install in markets-api and markets-ui

npm install -g cucumber

install selenium and chrome driver, add to system path

set baseUrl in markets-ui/test/webdriverjs/test.js and markets-ui/test/casperjs/test.js

set appRoot in markets-ui/src/js/app/framework/AppConfig.js

node src/app.js in markets-api to start api server at localhost:3000

run api tests in markets-api using

    grunt test

run webdriverjs tests using

    grunt webdriverjs --browser=chrome
    grunt webdriverjs --browser=phantomjs
    
run casperjs tests using

    grunt casper:all
    
run cucumber tests using

    grunt cucumber