const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
  entry: ['react-hot-loader/patch', './src/main.tsx'],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.resolve('src'),
      'react-dom': '@hot-loader/react-dom'
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new ForkTsCheckerWebpackPlugin()
  ],
  devServer: {
    hot: true,
    historyApiFallback: true
  }
}