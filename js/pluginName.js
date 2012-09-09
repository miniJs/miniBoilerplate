
jQuery(function() {
  $.pluginName = function(element, options) {
    var state;
    state = '';
    this.settings = {};
    this.$element = $(element);
    this.setState = function(_state) {
      return state = _state;
    };
    this.getState = function() {
      return state;
    };
    this.getSetting = function(key) {
      return this.settings[key];
    };
    this.callSettingFunction = function(name, args) {
      if (args == null) {
        args = [];
      }
      return this.settings[name].apply(this, args);
    };
    this.init = function() {
      this.settings = $.extend({}, this.defaults, options);
      this.callSettingFunction('callback', [this.$element, this.getSetting('message')]);
      return this.setState('ready');
    };
    this.init();
    return this;
  };
  $.pluginName.prototype.defaults = {
    message: 'hello word',
    callback: function() {}
  };
  return $.fn.pluginName = function(options) {
    return this.each(function() {
      var plugin;
      if ($(this).data('pluginName') === void 0) {
        plugin = new $.pluginName(this, options);
        return $(this).data('pluginName', plugin);
      }
    });
  };
});
