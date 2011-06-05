(function() {
  $(function() {
    $.pluginName = function(element, options) {
      var $element, defaults, foo_private_method, plugin;
      defaults = {
        message: 'hellow word',
        callback: function() {}
      };
      plugin = this;
      plugin.settings = {};
      $element = $(element);
      plugin.init = function() {
        plugin.settings = $.extend({}, defaults, options);
        return plugin.settings.callback(element, plugin.settings.message);
      };
      plugin.foo_public_method = function() {};
      foo_private_method = function() {};
      return plugin.init();
    };
    return $.fn.pluginName = function(options) {
      return this.each(function() {
        var plugin;
        if (void 0 === ($(this)).data('pluginName')) {
          plugin = new $.pluginName(this, options);
          return ($(this)).data('pluginName', plugin);
        }
      });
    };
  });
}).call(this);
