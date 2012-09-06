/*global module:false*/
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-jasmine-runner');
  grunt.loadNpmTasks('grunt-coffee');
 
  // Project configuration.
  grunt.initConfig({
    // pkg: '<json:package.json>',
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    lint: {
      files: ['grunt.js', 'lib/**/*.js', 'spec/**/*.js']
    },
    concat: {
      dist: {
        src: ['<banner:meta.banner>', '<file_strip_banner:lib/<%= pkg.name %>.js>'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    min: {
      dist: {
        src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
        dest: 'dist/<%= pkg.name %>.min.js'
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
      helpers : 'spec/javascripts/helpers/**/*.js',
      specs : 'spec/javascripts/*.js'
    },
    watch: {
      coffee : {
        files: ['<config:coffee.spec.src>', '<config:coffee.plugin.src>'],
        tasks: 'coffee'
      },
      jasmine : {
        files: ['<config:jasmine.src>', '<config:jasmine.helpers>', '<config:jasmine.specs>'],
        tasks: 'jasmine'
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        es5: true
      },
      globals: {
        jasmine : false,
        describe : false,
        beforeEach : false,
        expect : false,
        it : false,
        spyOn : false
      }
    }
  });
  

  // Load local tasks.
  grunt.loadTasks('tasks');

  // Default task.
  grunt.registerTask('default', 'lint qunit concat min jasmine coffee');

  
};
