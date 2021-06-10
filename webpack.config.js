const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin')

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: path.join(__dirname, 'src', 'main.tsx'),
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'main.bundle.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    // use index.html to mount the SPA
    historyApiFallback: {
      rewrites: [{ from: /^\/*/, to: '/index.html' }],
    },
    // make it accessible from docker containers
    host: '0.0.0.0',
    port: 8080,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        exclude: [/node_modules/, /stories/],
        options: {
          configFile: 'tsconfig.json',
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new HtmlMinimizerPlugin()],
  },
  plugins: [
    // generate default index.html
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
    new CopyPlugin({
      patterns: [{ from: '404.html', to: './' }],
    }),
  ],
}
