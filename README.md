# grunt-angular-jsx
Grunt plugin for [angular-jsx](https://www.github.com/thesam/angular-jsx).

## Installation

```
npm install grunt-angular-jsx
```

## Usage

```
module.exports = function(grunt) {

  grunt.initConfig({

    angular_jsx: {
      default: {
        options: {
        },
        files: [{
          expand: true
          cwd: 'test/fixtures/',
          src: ['*.js'],
          dest: 'tmp/',
          flatten: true,
        }]
      }
    }

  };

  grunt.loadNpmTasks('grunt-angular-jsx');

  grunt.registerTask('build', ['angular_jsx']);

};
```

```
$> grunt build
```