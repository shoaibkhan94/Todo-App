var Todos = require('../models/todoModel');

module.exports = function (app) {

    var starterTodos = [
        {
            username: "Test",
            todo: "Clean your home",
            isDone: false,
            hasAttachment: false
        },
        {
            username: "Test",
            todo: "Buy fruits",
            isDone: false,
            hasAttachment: false
        },
        {
            username: "Test",
            todo: "Write article",
            isDone: false,
            hasAttachment: false
        }
    ];

    app.get('/api/seedData', function (req, res) {

        Todos.create(starterTodos, function (err, results) {
            res.send(results);
        });
    });

}