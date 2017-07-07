module.exports = {
    entry: "./canvas.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { 
                test: /\.(css|scss)$/, loader: "style-loader!css-loader!sass-loader" }
        ]
    }
};