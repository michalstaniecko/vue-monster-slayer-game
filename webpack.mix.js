const mix = require( 'laravel-mix' );

mix.js( 'src/js/app.js', 'dist/js/app.js' )
    .vue( {
        version: 3
    } );
