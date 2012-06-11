describe "PluginName", ->
  options =
    message: 'Hello World'
    callback: (element, message) -> $(element).append("#{message}!")

  beforeEach ->
    loadFixtures 'fragment.html'
    @$element = $('#fixtures')

  it "should be available on the jQuery object", ->
    expect($.fn.pluginName).toBeDefined()

  it "should be chainable", ->
    expect(@$element.pluginName(options)).toBe(@$element)

  it "should offers default values", ->
    plugin = new $.pluginName(@$element[0], options)
    expect(plugin.defaults).toBeDefined()

  it "should overwrites the settings", ->
    plugin = new $.pluginName(@$element[0], options)
    expect(plugin.settings.message).toBe(options.message)
    expect(plugin.settings.callback).toBe(options.callback)

  it "should execute the callback method", ->
    expect(@$element.pluginName(options)).toHaveText 'Hello World!'  