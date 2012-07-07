(function() {

  jQuery(function() {
    $.pluginName = function(element, options) {
      var setState,
        _this = this;
      this.defaults = {
        message: 'hello word',
        callback: function() {}
      };
      this.state = '';
      this.settings = {};
      this.$element = $(element);
      setState = function(state) {
        this.state = state;
      };
      this.getState = function() {
        return state;
      };
      this.getSetting = function(settingKey) {
        return this.settings[settingKey];
      };
      this.callSettingFunction = function(functionName, args) {
        if (args == null) {
          args = [];
        }
        return this.settings[functionName].apply(this, args);
      };
      this.init = function() {
        _this.settings = $.extend({}, _this.defaults, options);
        return _this.callSettingFunction('callback', [_this.$element, _this.getSetting('message')]);
      };
      this.init();
      return this;
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

}).call(this);
