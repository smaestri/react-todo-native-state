var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var TodoConstants = require('../constants/TodoConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _todos = [];

function create(todo) {
  console.log('store create')
  _todos.push(todo);
}

function destroy(id) {
  console.log('store destroy')
  console.log(id)

  var index = _todos.indexOf(id);
      var newList = _todos.filter(( obj ) => {
      return obj.id !== id;
  });

  _todos = newList;

  console.log(_todos)

}

var TodoStore = assign({}, EventEmitter.prototype, {

  getAll: function() {
    console.log('store getall')
    return _todos;
  },

  emitChange: function() {
    console.log('emi changes')
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(action) {
  console.log('action')
  console.log(action)
  var text;
  switch(action.actionType) {
    case TodoConstants.TODO_CREATE:
      //text = action.text.trim();
      //if (text !== '') {
        create(action.todo);
        TodoStore.emitChange();
      //}
      break;

    case TodoConstants.TODO_DESTROY:
      destroy(action.id);
      TodoStore.emitChange();
      break;
  }
});

module.exports = TodoStore;
