#
# CoffeeScript jQuery Plugin Boilerplate
# By: Matthieu Aussaguel, http://www.mynameismatthieu.com
# Version: 1.0 alpha 1.0
# Updated: June 13th, 2011
#

$ ->
    $.pluginName = (element, options) ->
        defaults = {
            message     : 'hellow word' # setting description
            callback    : ->            # setting description
        }

        # current state of the notification
        state = ''

        # notification settings
        @settings = {}

        $element = $ element

        ## private methods
        setState = (_state) ->
          state = _state

        ## public methods
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
            @settings = $.extend {}, defaults, options
            @settings.callback element, @settings.message


        # initialise the plugin
        @init()

    $.fn.pluginName = (options) ->
        return this.each ->
            if undefined == ($ this).data('pluginName')
                plugin = new $.pluginName this, options
                ($ this).data 'pluginName', plugin