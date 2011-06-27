#
# CoffeeScript jQuery Plugin Boilerplate
# By: Matthieu Aussaguel, http://www.mynameismatthieu.com
# Version: 1.0 alpha 1.0
# Updated: June 27th, 2011
#

jQuery ->
    $.pluginName = (element, options) ->
        # default plugin settings
        @defaults = {
            message     : 'hellow word' # setting description
            callback    : ->            # setting description
        }

        ## private variables
        # current state
        state = ''

        ## public variables
        # plugin settings
        @settings = {}

        # jQuery version of DOM element attached to the plugin
        @$element = $ element

        ## private methods
        # set current state
        setState = (_state) ->
          state = _state

        ## public methods
        #get current state
        @getState = ->
          state

        # get particular plugin setting
        @getSetting = (settingKey) ->
          @settings[settingKey]

        # call one of the plugin setting functions
        @callSettingFunction = (functionName) ->
          @settings[functionName]()

        # init function
        @init = ->
            @settings = $.extend {}, @defaults, options
            @settings.callback element, @settings.message
        # end init method

        # initialise the plugin
        @init()

    $.fn.pluginName = (options) ->
        return this.each ->
            if undefined == ($ this).data('pluginName')
                plugin = new $.pluginName this, options
                ($ this).data 'pluginName', plugin