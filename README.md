# CoffeesScript jQuery Plugin Boilerplate

By: Matthieu Aussaguel, http://www.mynameismatthieu.com, @matthieu_tweets

jQuery Plugin Boilerplate written in CoffeeScript to help you create plugins in a clean and quick way.

## Examples and Instructions

### Basic Example

* HTML
`<div id="main"></div>`

* Javascript
`$('#main').pluginName({
                   message: 'Hello World!',
                   callback: function(e, message) {
                        $(e).append(message);
                    }
                  });`

### Website Url
coming soon... (hint: 'mini')

### Browsers supported
* Any browser that supports JavaScript

## Changelog

* Initial Release

## Resources
-   CoffeeScript Documentation: http://jashkenas.github.com/coffee-script/
-   NodeJs Wesite: http://nodejs.org/