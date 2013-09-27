document.write('<h4>Word Count Example</h4>');
// asynchronous example
var asyncFunction = function(callback) {
  // do something that is not available immediately
  window.setTimeout(callback, 1000);
}
document.write('test 1' + 'before invoke');

// setup a callback function and invoke the method
var callback = function(message) {
  document.write('test 1' + 'in callback');
};
asyncFunction (callback);

document.write('test1' + 'after invoke');
