# LAB - 28/29/31

## React Properties
### Lab 28:  
* Just an "intro" to react properties, I guess.
### Lab 29:  
* More react properties, I guess.
### Lab 31:
* Refactor class components to be function components
* use "useState", "useEffect", and "useReducer" to achieve this

### Author: Calvin Hall

### Links and Resources
* [submission PR](https://github.com/Clownvin-cr-deltav-401d4/lab-31/pull/1)
* [![Build Status](https://www.travis-ci.com/Clownvin-cr-deltav-401d4/lab-31.svg?branch=master)](https://www.travis-ci.com/Clownvin-cr-deltav-401d4/lab-31)

## Modules
### Header
Contains a header. Set the count property to change the todo count

### Form
Contains a form, taking in a description of the task, who it's assigned to, a difficulty, and a date. When submitting form, a new todo item is created

### TodoList
Contains a list of todos. Todo items are passed in using the "todos" property.

### TodoItem
Houses the information about a single todo, contained in a span, and a button to delete the todo. Clicking on the span will toggle the completed status of the todo.
Clicking the details button will open a modal with the rest of the details.

### Details
A details modal for todo items. Displays more information, such as the asignee, the difficulty, and the date.

## Running the app
* `npm start`
  
## Tests
* `npm test`
