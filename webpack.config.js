const upath = require('upath');

module.exports = {
    // mode: 'development',
    entry: {
        material: upath.resolve(__dirname, 'src/js/material.js'),
        prism: upath.resolve(__dirname, 'src/js/prism.js'),
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    configFile: upath.resolve(__dirname, './tsconfig.json'),
                },
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        path: upath.resolve(__dirname, 'dist/js'),
        filename: '[name].js',
    },
};
