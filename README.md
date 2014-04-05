markets-demo
============

create mysql database using schema.sql in markets-api

npm install in markets-api and markets-ui

node src/app.js in markets-api to start api server at localhost:3000

set baseUrl in markets-ui/test/webdriverjs/test.js and markets-ui/test/casperjs/test.js

set appRoot in markets-ui/src/js/app/framework/AppConfig.js

run selenium tests using

    grunt webdriverjs --browser=chrome
    grunt webdriverjs --browser=phantomjs
    
run casperjs tests using

    grunt casper:all