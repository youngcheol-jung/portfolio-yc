module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    serve: {
        options: {
            port: 9000
        }
    },


    // HTML Task
    // grunt-htmlhint : html 구문검사(아톰에 린트과 비슷한기능)
    // grunt-includes : html 인크루드 사용
    includes:{
        dist:{
            cwd:'html/',
            src:['**/*.html'],
            dest:'dist/',
            options:{
                flatten:true,
                includePath:'html/include/'
            }
        }
    },


    less: {
        min: {
        options: {
          paths: ['assets/css'],
          compress:true
        },
        files: {
          './assets/css/style.css': './assets/less/import.less'
        }
    },
    dev: {
        options: {
          paths: ['assets/css'],
          dumpLineNumbers:"comments"
        },
        files: {
          './assets/css/style.dev.css': './assets/less/import.less'
        }
      }
  },
  watch: {
      scripts: {
        files: ['./assets/less/*.less'],
        tasks: ['less'],
        options: {
          spawn: false,
        },
      },
    },
});

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-serve');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-includes');

  // Default task(s).
  grunt.registerTask('default', ['serve']);


};
