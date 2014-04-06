module.exports = function(grunt) {

	grunt.initConfig({

		// Import package manifest
		pkg: grunt.file.readJSON('adaptiveslider.jquery.json'),

		// Banner definitions
		meta: {
			banner: '/*\n' +
			' *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n' +
			' *  <%= pkg.description %>\n' +
			' *  <%= pkg.homepage %>\n' +
			' *\n' +
			' *  Made by <%= pkg.author.name %>\n' +
			' *  Under <%= pkg.licenses[0].type %> License\n' +
			' */\n'
		},

		clean: ["dist/*"],

		// Concat definitions
		concat: {
			dist: {
				src: ['src/js/jquery.adaptiveslider.js'],
				dest: 'dist/js/jquery.adaptiveslider.js'
			},
			options: {
				banner: '<%= meta.banner %>'
			}
		},

		// Lint definitions
		jshint: {
			files: ['src/jquery.adaptiveslider.js'],
			options: {
				jshintrc: '.jshintrc'
			}
		},

		// Minify definitions
		uglify: {
			dist: {
				src: ['dist/js/jquery.adaptiveslider.js'],
				dest: 'dist/js/jquery.adaptiveslider.min.js'
			},
			options: {
				banner: '<%= meta.banner %>'
			}
		},

		// Compile SCSS
		compass: {
	    dist: {
	      options: {
	      	sassDir: 'src/styles/sass',
	      	cssDir: 'src/styles/css',
	      	environment: 'development',
	      	specify: 'src/styles/sass/adaptiveslider.scss',
	      	banner: '<%= meta.banner %>'
	      }
	    }
	  },

	  // Copy the output CSS
	  copy: {
	  	dist: {
	  		expand: false, 
	  		src: ['src/styles/css/adaptiveslider.css'], 
	  		dest: 'dist/styles/adaptiveslider.css'
	  	}
	  },

	  // Minify the CSS for production.
	  cssmin: {
	  	combine: {
	  		files: {
	  			'dist/styles/adaptiveslider.min.css': 'dist/styles/adaptiveslider.css'
	  		},
	  		options: {
	  			banner: '<%= meta.banner %>'
	  		}
	  	}
	  }

		});

grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-compass');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-clean');

grunt.registerTask('default', ['jshint', 'clean', 'compass', 'copy', 'cssmin', 'concat', 'uglify']);
grunt.registerTask('travis', ['jshint']);

};
