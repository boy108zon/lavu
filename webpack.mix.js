const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

/*mix.webpackConfig(webpack => {
    return {
		output: {
          publicPath: process.env.VUE_PUBLIC_PATH
        },
        plugins: [
            new webpack.ProvidePlugin({
                BASE_URL: process.env.VUE_PUBLIC_PATH
            })
        ]
    };
});*/
/*mix.webpackConfig(webpack => {
    return {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                Popper: ['popper.js', 'default'],
            })
        ]
    };
});*/

/*mix.webpackConfig({
  output:{
    publicPath: "/var/www/html/lavu/public/"
  }
})*/


mix.js('resources/js/app.js', 'public/js')
    .vue()
    .js('resources/assets/libs/jquery/jquery.min.js', 'public/js')
	.js('resources/assets/libs/bootstrap/js/bootstrap.bundle.min.js', 'public/js')
    .js('resources/assets/libs/metismenu/metisMenu.min.js', 'public/js')
    .js('resources/assets/libs/simplebar/simplebar.min.js', 'public/js')
    .js('resources/assets/libs/node-waves/waves.min.js', 'public/js')
    .js('resources/assets/libs/feather-icons/feather.min.js', 'public/js')
	.js('resources/assets/libs/pace-js/pace.min.js', 'public/js')
	//.js('resources/assets/libs/apexcharts/apexcharts.min.js', 'public/js')
    .js('resources/assets/libs/admin-resources/jquery.vectormap/jquery-jvectormap-1.2.2.min.js', 'public/js')
	//.js('resources/assets/libs/admin-resources/jquery.vectormap/maps/jquery-jvectormap-world-mill-en.js', 'public/js')
	.js('resources/assets/js/pages/dashboard.init.js', 'public/js')
    .js('resources/assets/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css');
	
   