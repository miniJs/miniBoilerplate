(function() {

  describe("PluginName", function() {
    var options;
    options = {
      message: 'Hello World',
      callback: function(element, message) {
        return $(element).append("" + message + "!");
      }
    };
    beforeEach(function() {
      loadFixtures('fragment.html');
      return this.$element = $('#fixtures');
    });
    it("should be available on the jQuery object", function() {
      return expect($.fn.pluginName).toBeDefined();
    });
    it("should be chainable", function() {
      return expect(this.$element.pluginName(options)).toBe(this.$element);
    });
    it("should offers default values", function() {
      var plugin;
      plugin = new $.pluginName(this.$element[0], options);
      return expect(plugin.defaults).toBeDefined();
    });
    it("should overwrites the settings", function() {
      var plugin;
      plugin = new $.pluginName(this.$element[0], options);
      expect(plugin.settings.message).toBe(options.message);
      return expect(plugin.settings.callback).toBe(options.callback);
    });
    return it("should execute the callback method", function() {
      return expect(this.$element.pluginName(options)).toHaveText('Hello World!');
    });
  });

}).call(this);
