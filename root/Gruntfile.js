'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          require: ['test/bootstrap.js'],
        },
        src: ['test/**/*.js', '!test/bootstrap.js']
      },
      cov: {
        options: {
          reporter: 'html-cov',
          require: ['test/bootstrap.js'],
          quiet: true,
          captureFile: 'coverage.html'
        },
        src: ['test/**/*.js', '!test/bootstrap.js']
      },
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib: {
        src: ['lib/**/*.js']
      },
      test: {
        src: ['test/**/*.js', '!test/bootstrap.js']
      },
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib: {
        files: '<%= jshint.lib.src %>',
        tasks: ['jshint:lib', 'mochaTest:test']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'mochaTest:test']
      },
    },
    blanket: {
      lib: {
        src: ['lib'],
        dest: 'lib.cov',
      }
    },
    env : {
      cov: {
        TEST_COV: 1
      }
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-env');
  grunt.loadNpmTasks('grunt-blanket');

  // Default task.
  grunt.registerTask('default', ['jshint', 'mochaTest:test']);
  grunt.registerTask('coverage', ['env:cov', 'blanket', 'mochaTest:cov']);

};
