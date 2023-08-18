const path = require("path");

module.export={
    mode: 'development',
    entry: {
        main: path.resolve(--dirname, './src/index.js')
    },
    output: {
        path: path.resolve(--dirname, 'dist'),
        filename: "bundle.js",
        chunkFilename: "[name].[contenthash].js",
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(gif|png|jp?g|svg)$/i,
                use: [
                    "file-loader",
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                            disable: true,
                        },
                    },
                ]
            },
        ]
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 8564,
        hot: true, // Enable hot module replacement
    },
    plugins: [
        new HtmlWebpackPlugin({
          filename: './index.html'
      }),
        new CleanWebpackPlugin()
      ],
    devtool: 'inli
    
    
}