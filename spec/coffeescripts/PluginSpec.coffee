describe 'PluginName', ->
  options =
    message: 'Hello World'
    callback: (element, text) -> $(element).append("#{text}!")

  beforeEach ->
    loadFixtures 'fragment.html'
    @$element = $('#fixtures')

  it 'should be available on the jQuery object', ->
    expect($.fn.pluginName).toBeDefined()

  it 'should be chainable', ->
    expect(@$element.pluginName(options)).toBe(@$element)

  it 'should offers default values', ->
    plugin = new $.pluginName(@$element[0], options)

    expect(plugin.defaults).toBeDefined()

  it 'should overwrites the settings', ->
    plugin = new $.pluginName(@$element[0], options)

    expect(plugin.settings.message).toBe(options.message)
    expect(plugin.settings.callback).toBe(options.callback)

  it 'should execute the callback append the hello world! to the element', ->
    @$element.pluginName(options)

    expect(@$element).toHaveText 'Hello World!'  
      
  it 'should execute the callback the right arguments', ->
    foo     = jasmine.createSpy('foo')
    plugin = new $.pluginName(@$element, {message: 'Hello World', callback: foo})

    expect(foo).toHaveBeenCalled()
    expect(foo.mostRecentCall.args[0]).toBe @$element
    expect(foo.mostRecentCall.args[1]).toBe "Hello World"



  