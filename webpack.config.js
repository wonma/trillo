const path = require('path');

module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app')
    }, 
    mode: "development",
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./app/**/*.html"],
        static: {
            directory: path.join(__dirname, "./app"),
            watch: false,
        },
        hot: true,
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.(s(a|c)ss)$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    }
}
