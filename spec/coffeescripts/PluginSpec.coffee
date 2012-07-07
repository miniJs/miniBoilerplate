describe 'PluginName', ->
  options =
    message: 'Hello World'
    callback: (element, text) -> $(element).append("#{text}!")

  beforeEach ->
    loadFixtures 'fragment.html'
    @$element = $( '#fixtures' )

  describe 'plugin behavior', ->
    it 'should be available on the jQuery object', ->
      expect( $.fn.pluginName ).toBeDefined()

    it 'should be chainable', ->
      expect( @$element.pluginName() ).toBe @$element

    it 'should offers default values', ->
      plugin = new $.pluginName( @$element )

      expect( plugin.defaults ).toBeDefined()

    it 'should overwrites the settings', ->
      plugin = new $.pluginName( @$element, options )

      expect( plugin.settings.message ).toBe(options.message)
      expect( plugin.settings.callback ).toBe(options.callback)

  describe 'plugin logic', ->
    it 'should execute the callback append the hello world! to the element', ->
      @$element.pluginName( options )

      expect( @$element ).toHaveText 'Hello World!'  

  describe 'callback', ->
    it 'should execute the callback the right arguments', ->
      callback = jasmine.createSpy 'callback'
      plugin   = new $.pluginName(@$element, { message: 'Hello World', callback: callback } )

      expect( callback ).toHaveBeenCalledWith( @$element, "Hello World" )  