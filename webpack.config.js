module.exports =  {

	entry:"./app/main.js",
	output:{
		path:"./dist",
		filename:"bundle.js",
		publicPath:"/"
	},
	devServer:{
		inline:true,
		contentBase:'./dist',
		port:7777
	},
	module:{
		loaders:[
			{
				test   :/\.jsx?$/,
				exclude:/(node_modules|bower_components)/,
				loader :'babel',
				query  :{
					presets:['react','es2015']
				}
			}
		]
	}
}