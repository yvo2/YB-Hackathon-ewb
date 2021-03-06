const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  output: {
    filename: '[hash].js',
  },
  resolve: {
    modules: ['src', 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.json\.map$/,
        use: 'file-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: 'file-loader',
      },
      {
        test: /\.csv$/,
        use: 'file-loader',
      },
      {
        test: /\.(vert|frag)$/,
        use: 'raw-loader',
      },
      {
        test: /\.(mp3|ogg)$/,
        use: 'file-loader',
      },
    ],
  },
  stats: 'minimal',
  devtool: 'source-map',
  performance: {
    hints: false,
  },
  plugins: [
    new webpack.DefinePlugin({
      CANVAS_RENDERER: true,
      WEBGL_RENDERER: true,
    }),
    new HtmlWebpackPlugin({
      /* favicon: 'src/img/favicon.png', */
      template: 'src/index.html',
    })
  ],
  devServer: {
    port: 8080,
    stats: 'minimal',
  },
};

module.exports = config
