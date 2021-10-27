var path = require('path');

module.exports = {
    entry: "./src/index.js",
    devtool: 'inline-source-map',
    devServer: {
        static: './dist'
    },
    output: {
        path: __dirname+"/dist",
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ],
    },
    mode: "development",
};
