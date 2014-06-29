Steps to run the API
--------------------

Create a mysql database using schema.sql in markets-api

Install node modules

    npm install
    
Run tests

    mocha --reporter spec

Start server at localhost:3000

    node src/app.js