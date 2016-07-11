var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

todoList = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', items: todoList });
});


router.post('/add', function(req, res) {
  newTask = req.body.newTask;
  todoList.push({
    id: todoList.length +1,
    task: newTask
  });
  res.redirect('/');
});


module.exports = router;
