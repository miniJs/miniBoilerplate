(function() {
  jQuery(function() {
    $.pluginName = function(element, options) {
      var setState, state;
      this.defaults = {
        message: 'hellow word',
        callback: function() {}
      };
      state = '';
      this.settings = {};
      this.$element = $(element);
      setState = function(_state) {
        return state = _state;
      };
      this.getState = function() {
        return state;
      };
      this.getSetting = function(settingKey) {
        return this.settings[settingKey];
      };
      this.callSettingFunction = function(functionName) {
        return this.settings[functionName]();
      };
      this.init = function() {
        this.settings = $.extend({}, this.defaults, options);
        return this.settings.callback(element, this.settings.message);
      };
      return this.init();
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
