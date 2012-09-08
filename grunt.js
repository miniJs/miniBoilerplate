/*global module:false*/
module.exports = function(grunt) { 
  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    growl: {
      coffee: {
        title: 'CoffeeScript',
        message: 'Compiled'
      },
      jasmine: {
        title: 'Jasmine',
        message: 'Tests passed'
      }
    },
    coffee: {
      spec: {
        src: 'spec/coffeescripts/*Spec.coffee',
        dest: 'spec/javascripts'
      },
      plugin: {
        src: 'js/*.coffee',
        dest: 'js'
      }
    },
    jasmine : {
      src : ['spec/javascripts/libs/**/*.js', 'js/**/*.js'],
      specs : 'spec/javascripts/**/*.js'
    },
    watch: {
      coffee : {
        files: ['<config:coffee.spec.src>', '<config:coffee.plugin.src>'],
        tasks: 'coffee growl:coffee'
      },
      jasmine : {
        files: ['<config:jasmine.src>', '<config:jasmine.specs>'],
        tasks: 'jasmine growl:jasmine'
      }
    },
    min: {
      dist: {
        src: ['<banner:meta.banner>', 'js/<%= pkg.name %>.js'],
        dest: 'js/<%= pkg.name %>.min.js'
      }
    }
  });

  // Lib tasks.
  grunt.loadNpmTasks('grunt-growl');
  grunt.loadNpmTasks('grunt-jasmine-runner');
  grunt.loadNpmTasks('grunt-coffee');


  // Default task.
  grunt.registerTask('default', 'growl coffee jasmine');  

  // Travis CI task.
  grunt.registerTask('travis', 'jasmine');
};
