var browserSync = require( 'browser-sync');

browserSync({
    notify: false,
    port: 8080,
    server: {
      baseDir: ['dist']
    }
  },require('./serverapi/server.js'));