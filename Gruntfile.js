module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                stripBanners: {
                    line: true,
                    block: true,
                },
                banner: '/*!\n * <%= pkg.name %> - v<%= pkg.version %> - ' +
                        '<%= grunt.template.today("yyyy-mm-dd") %> \n' +
                        ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %> <<%= pkg.author.email %>>\n' +
                        ' * \n' +
                        ' * License: <%= pkg.license.type %> -  <%= pkg.license.url %>\n' +
                        ' */\n\n',
                separator: ';\n',
            },
            dist: {
                src: ['src/core.js'],
                dest: 'file-embeds.js',
            },
        },
        uglify: {
            options: {
                mangle: false,
                banner: '/*!\n * <%= pkg.name %> - v<%= pkg.version %> - ' +
                        '<%= grunt.template.today("yyyy-mm-dd") %> \n' +
                        ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %> <<%= pkg.author.email %>>\n' +
                        ' * \n' +
                        ' * License: <%= pkg.license.type %> -  <%= pkg.license.url %>\n' +
                        ' */\n\n',
            },
            my_target: {
                files: {
                    'file-embeds.min.js': ['src/core.js']
                },
            },
        },
    });

    grunt.registerTask('default', ['concat','uglify']);
}
