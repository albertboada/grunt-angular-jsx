# grunt-angular-jsx
Grunt plugin for [angular-jsx](https://www.github.com/thesam/angular-jsx).

## Installation

```
$> npm install grunt-angular-jsx
```

## Usage

```js
module.exports = function(grunt) {

  grunt.initConfig({

    angular_jsx: {
      default: {
        files: [{
          src: ['src/*.js'],
          dest: 'build/'
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
