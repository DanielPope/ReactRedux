import path from 'path'
import webpack from 'webpack';

export default {
  devTools: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '/client/index.js'),
  ],
  output: {
    path: '/',
    publicPath: '/'
  },
  plugins : [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'client'),
        loaders: ['react-hot','babel']
      }
    ]
  },
  resolve: {
    alias: {
      departments: '../../data/departments.js',
      actions: '../../actions/signupActions.js'
    },
    extentions: [ '', '.js']
  }
}
