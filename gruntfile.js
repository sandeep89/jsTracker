var grunt = require('grunt');
require('google-closure-compiler').grunt(grunt);
 
// Project configuration. 
grunt.initConfig({
  'closure-compiler': {
    my_target: {
      files: {
        'dist/output.min.js': ['src/*.js']
      },
      options: {
        compilation_level: 'SIMPLE',
        language_in: 'ECMASCRIPT6',
        create_source_map: 'dist/output.min.js.map',
        output_wrapper: '(function(){\n%output%\n}).call(this)\n//# sourceMappingURL=output.min.js.map'
      }
    }
  }
});

 grunt.registerTask('default', ['closure-compiler']);
