$(function() {
  $('#main').pluginName({
        'message': 'Hello World',
        'callback': function(e, message) {
          $(e).append(message);
        }
      });
});
