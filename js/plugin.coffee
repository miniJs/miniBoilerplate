#
# CoffeeScript jQuery Plugin Boilerplate
# By: Matthieu Aussaguel, http://www.mynameismatthieu.com, @mattaussaguel
# Version: 1.1 Stable
# Updated: June 10, 2012
# More info: http://minijs.com/
#

jQuery ->
  $.pluginName = (element, options) ->
    # default plugin settings
    @defaults = 
      message     : 'hellow word' # option description
      callback    : ->            # callback description

    # current state
    @state = ''

    # plugin settings
    @settings = {}

    # jQuery version of DOM element attached to the plugin
    @$element = $ element

    # set current state
    setState = (@state) ->

    #get current state
    @getState = -> state

    # get particular plugin setting
    @getSetting = (settingKey) ->
      @settings[settingKey]

    # call one of the plugin setting functions
    @callSettingFunction = (functionName) ->
      @settings[functionName]()

    @init = ->
      @settings = $.extend {}, @defaults, options
      @settings.callback element, @settings.message

    # initialise the plugin
    @init()

  $.fn.pluginName = (options) ->
    return this.each ->
      if undefined == ($ this).data('pluginName')
        plugin = new $.pluginName this, options
        ($ this).data 'pluginName', plugin