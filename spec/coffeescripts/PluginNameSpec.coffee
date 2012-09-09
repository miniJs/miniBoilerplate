describe 'PluginName', ->
  options =
    message: 'Hello World'
    callback: ( element, text ) -> $(element).append("#{text}!")

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

      expect( plugin.settings.message ).toBe( options.message )
      expect( plugin.settings.callback ).toBe( options.callback )

  describe 'plugin state', ->
    beforeEach ->
      @plugin = new $.pluginName( @$element )

    it 'should have a ready state', ->
      expect( @plugin.getState() ).toBe 'ready'

    it 'should be updatable', ->
      @plugin.setState( 'new state' )

      expect( @plugin.getState() ).toBe 'new state'

  describe 'plugin logic', ->
    it 'should execute the callback method', ->
      @$element.pluginName( options )

      expect( @$element ).toHaveText 'Hello World!'  

  describe 'callback', ->
    it 'should execute the callback with the correct arguments', ->
      options  =
        message: options.message
        callback: jasmine.createSpy 'callback'

      new $.pluginName( @$element, options )

      expect( options.callback ).toHaveBeenCalledWith( @$element, "Hello World" )  