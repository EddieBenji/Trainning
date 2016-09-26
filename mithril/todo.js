/**
 *
 * Created by lalo on 25/09/16.
 */


//this application only has one component: to-do!
var todo = {};
todo.Todo = function (data) {
  this.description = m.prop(data.description);
  this.done = m.prop(data.done);
};
todo.TodoList = Array;

todo.model = {
  init: function () {
    //A running list of todos:
    todo.model.list = new todo.TodoList();
    //a slot to store the name of a new to do before it is created:
    todo.model.description = m.prop('');

    //adds a to do to the list, and clears the description field for user convenience
    todo.model.add = function () {
      if (todo.model.description()) {
        var dataToAdd = {
          description: todo.model.description(),
          done: false
        };
        var newTicket = new todo.Todo(dataToAdd);
        todo.model.list.push(newTicket);
        todo.model.description(''); //set the description in the controller
      }
    }
  }
};


//Let's create the view, that is plain js:
todo.view = function () {
  return (m('html', [
        m('body', [
          m('input', {
            onchange: m.withAttr('value', todo.model.description), value: todo.model.description()
          }),//binding a model value to an input in a template
          m('button', {
            onclick: todo.model.add
          }, 'Add'),//Everytime someone pushes this button,
          // a new element to the list will be added
          m('table', [
            todo.model.list.map(function (task) {
              return m('tr', [
                m('td', [
                  m('input[type=checkbox]', {
                    onclick: m.withAttr('checked', task.done), checked: task.done()
                  })
                ]),
                m('td', {
                  style: {
                    textDecoration: task.done() ? 'line-through' : 'none'
                  }
                }, task.description()),
              ])
            })
          ])
        ])
      ])
  );
};

//Initialize object:
todo.controller = function () {
  todo.model.init();
  var data = {
    description: 'Start learning mithril',
    done: true
  };
  var ticket = new todo.Todo(data);

  data.description = 'Doing a todo app';
  data.done = false;
  var secondTicket = new todo.Todo(data);

  todo.model.list.push(ticket);
  todo.model.list.push(secondTicket);
};

m.mount(document.body, {controller: todo.controller, view: todo.view});
