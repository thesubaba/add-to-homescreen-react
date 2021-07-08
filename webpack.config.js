const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const GoogleFontsPlugin = require('@beyonk/google-fonts-webpack-plugin');

module.exports = {
  entry: './src/AddToHomeScreen.js',
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'AddToHomeScreen.js',
    library: 'add-to-homescreen-react',
    libraryTarget: 'umd'
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{
        context: 'src/images',
        from: '**/*',
        to: path.resolve(__dirname, 'build/images')
      }]
    }),
    new GoogleFontsPlugin({
      fonts: [
        { family: 'Fira Sans', variants: [ '400', '600' ], display: 'swap' },
      ]
    })
  ]
};
