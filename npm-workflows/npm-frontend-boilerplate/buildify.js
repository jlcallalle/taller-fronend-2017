const  buildify = require('buildify'),
	filesCSS = [
		'./dist/css/local_styles.css',
		'./dist/css/style.css',
		'./dist/css/medialab.css'
	];

	buildify()
		.concat( filesCSS )
		.cssmin()
		.save( './dist/css/style.min.css' );
