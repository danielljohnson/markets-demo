var fs = require('fs')
var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');

// database
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '',
  multipleStatements: true
});

connection.connect();

connection.query('drop database if exists markets');

fs.readFile('schema.sql', 'utf8', function(err, data) {
  console.log('running sql: '+ data);
  connection.query(data);
});

// app
var app = express();
app.use(bodyParser());

// cross domain stuff
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', "GET,PUT,POST,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Content-Length, X-Requested-With");
  if (req.method === 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
});

// markets
app.get('/rest/markets', function(req, res) {
  connection.query('SELECT * FROM market', function(err, rows) {
    res.json(200, {
      markets: rows
    });
  });
});

app.get('/rest/markets/:id', function(req, res) {
  var id = req.params.id;
  
  connection.query('SELECT * FROM market WHERE id = ?', [id], function(err, rows) {
    if (rows.length === 0) {
      res.send(404);
    } else {
      res.json(200, {
        market: rows[0]
      });
    }
  });
});

app.post('/rest/markets', function(req, res) {
  var params = req.body;
  
  connection.query('INSERT INTO market SET ?', params, function(err, result) {
    if (err) {
      res.send(500, {
        'error': err
      });
    } else {
      res.location('/markets/' + result.insertId);
      res.json(201, {
        id: result.insertId
      });
    }
  });
});

app.put('/rest/markets/:id', function(req, res) {
  var id = req.params.id;
  var params = req.body;
  
  delete params.id;
  
  connection.query('UPDATE market SET ? WHERE id = ?', [params, id], function(err, result) {
    if (err) {
      res.send(500, {
        'error': err
      });
    } else {
      res.json(200);
    }
  });
});

app.delete('/rest/markets/:id', function(req, res) {
  var id = req.params.id;
  
  connection.query('DELETE FROM market WHERE id = ?', id, function(err, result) {
    if (err) {
      res.send(500, {
        'error': err
      });
    } else {
      res.json(200);
    }
  });
});

// locations
app.get('/rest/locations', function(req, res) {
  connection.query('SELECT * FROM location', function(err, rows) {
    res.json(200, {
      locations: rows
    });
  });
});

app.get('/rest/locations/:id', function(req, res) {
  var id = req.params.id;
  
  connection.query('SELECT * FROM location WHERE id = ?', [id], function(err, rows) {
    if (rows.length === 0) {
      res.send(404);
    } else {
      res.json(200, {
        location: rows[0]
      });
    }
  });
});

// currencies
app.get('/rest/currencies', function(req, res) {
  connection.query('SELECT * FROM currency', function(err, rows) {
    res.json(200, {
      currencies: rows
    });
  });
});

app.get('/rest/currencies/:id', function(req, res) {
  var id = req.params.id;
  
  connection.query('SELECT * FROM currency WHERE id = ?', [id], function(err, rows) {
    if (rows.length === 0) {
      res.send(404);
    } else {
      res.json(200, {
        currency: rows[0]
      });
    }
  });
});

app.use(express.static('../markets-ui-angular/app'));

var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});