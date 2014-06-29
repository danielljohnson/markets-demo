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
    npm install -g karma-cli

Run webdriverjs tests

    grunt webdriverjs --browser=chrome
    grunt webdriverjs --browser=phantomjs
    
Run casperjs tests

    grunt casper:all
    
Run cucumber tests

Install the selenium server and chrome driver (see selenium website for details), add their directory to system path. If you are on windows, change cucumber.js to cucumber-js on line 73 in Gruntfile.js.

Start selenium server using java -jar /your/path/to/selenium-server-standalone-x.xx.x.jar 

    grunt cucumber
    
Run unit tests using karma and generate code coverage reports with istanbul

    grunt unit