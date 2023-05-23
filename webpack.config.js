const path = require('path');
const { mainModule } = require('process');


module.exports = {
    entry: {
        index: './src/index.js',
    },
    devtool: 'inline-source-map',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],

            },
            
        ],
    },
};