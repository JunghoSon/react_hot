module.exports = {
    entry: './src/index.js',

    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },

    modules: {
        loader: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
