/*global module:false*/
module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-rigger');

  // Project configuration.
  grunt.initConfig({
    meta: {
      version: '0.1.0',
      banner: '// Jasmine.Async, v<%= meta.version %>\n' +
        '// Copyright (c)<%= grunt.template.today("yyyy") %> Muted Solutions, LLC. All Rights Reserved.\n' + 
        '// Distributed under MIT license\n' + 
        '// http://github.com/derickbailey/jasmine.async'
    },

    lint: {
      files: ['src/jasmine.async.js']
    },

    rig: {
      build: {
        src: ['<banner:meta.banner>', 'src/jasmine.async.js'],
        dest: 'lib/jasmine.async.js'
      }
    },

    min: {
      standard: {
        src: ['<banner:meta.banner>', '<config:rig.build.dest>'],
        dest: 'lib/jasmine.async.min.js'
      }
    },

    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: false,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {
        runs: true,
        waitsFor: true
      }
    },
    uglify: {}
  });

  // Default task.
  grunt.registerTask('default', 'lint rig min');

};
