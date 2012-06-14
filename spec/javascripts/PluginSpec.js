(function() {

  describe('PluginName', function() {
    var options;
    options = {
      message: 'Hello World',
      callback: function(element, text) {
        return $(element).append("" + text + "!");
      }
    };
    beforeEach(function() {
      loadFixtures('fragment.html');
      return this.$element = $('#fixtures');
    });
    it('should be available on the jQuery object', function() {
      return expect($.fn.pluginName).toBeDefined();
    });
    it('should be chainable', function() {
      return expect(this.$element.pluginName(options)).toBe(this.$element);
    });
    it('should offers default values', function() {
      var plugin;
      plugin = new $.pluginName(this.$element[0], options);
      return expect(plugin.defaults).toBeDefined();
    });
    it('should overwrites the settings', function() {
      var plugin;
      plugin = new $.pluginName(this.$element[0], options);
      expect(plugin.settings.message).toBe(options.message);
      return expect(plugin.settings.callback).toBe(options.callback);
    });
    it('should execute the callback append the hello world! to the element', function() {
      this.$element.pluginName(options);
      return expect(this.$element).toHaveText('Hello World!');
    });
    return it('should execute the callback the right arguments', function() {
      var foo, plugin;
      foo = jasmine.createSpy('foo');
      plugin = new $.pluginName(this.$element, {
        message: 'Hello World',
        callback: foo
      });
      expect(foo).toHaveBeenCalled();
      expect(foo.mostRecentCall.args[0]).toBe(this.$element);
      return expect(foo.mostRecentCall.args[1]).toBe("Hello World");
    });
  });

}).call(this);
