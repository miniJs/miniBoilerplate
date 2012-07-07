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
    describe('plugin behavior', function() {
      it('should be available on the jQuery object', function() {
        return expect($.fn.pluginName).toBeDefined();
      });
      it('should be chainable', function() {
        return expect(this.$element.pluginName()).toBe(this.$element);
      });
      it('should offers default values', function() {
        var plugin;
        plugin = new $.pluginName(this.$element);
        return expect(plugin.defaults).toBeDefined();
      });
      return it('should overwrites the settings', function() {
        var plugin;
        plugin = new $.pluginName(this.$element, options);
        expect(plugin.settings.message).toBe(options.message);
        return expect(plugin.settings.callback).toBe(options.callback);
      });
    });
    describe('plugin logic', function() {
      return it('should execute the callback append the hello world! to the element', function() {
        this.$element.pluginName(options);
        return expect(this.$element).toHaveText('Hello World!');
      });
    });
    return describe('callback', function() {
      return it('should execute the callback the right arguments', function() {
        var callback, plugin;
        callback = jasmine.createSpy('callback');
        plugin = new $.pluginName(this.$element, {
          message: 'Hello World',
          callback: callback
        });
        return expect(callback).toHaveBeenCalledWith(this.$element, "Hello World");
      });
    });
  });

}).call(this);
