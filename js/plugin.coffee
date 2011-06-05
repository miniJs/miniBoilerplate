$ ->
    $.pluginName = (element, options) ->
        defaults = {
            message: 'hellow word',
            callback: ->
        }

        plugin = this

        plugin.settings = {}

        $element = $ element

        plugin.init = ->
            plugin.settings = $.extend {}, defaults, options
            plugin.settings.callback element, plugin.settings.message

        plugin.foo_public_method = ->

        foo_private_method = ->

        plugin.init()

    $.fn.pluginName = (options) ->
        return this.each ->
            if undefined == ($ this).data('pluginName')
                plugin = new $.pluginName this, options
                ($ this).data 'pluginName', plugin