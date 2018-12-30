const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = (env, argv) => {
  const configuration = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js'
    },
    module: {
      rules: []
    },
    plugins: [],
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components/'),
        classes: path.resolve(__dirname, 'src/classes/'),
      }
    }
  }

  // plugins

  const htmlPlugin = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html',
  })

  // rules

  const scssCompiler = {
    test: /\.scss$/,
    use: [
      'style-loader',
      {
        loader: "css-loader",
        options: {
          sourceMap: true,
          modules: true,
          localIdentName: "[local]___[hash:base64:5]"
        }
      },
      "sass-loader"],
  }

  const jsCompiler = {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: ['babel-loader']
  }

  // devServer

  const devServer = {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
  }

  //init

  configuration.module.rules.push(scssCompiler, jsCompiler)

  configuration.plugins.push(htmlPlugin)

  if (argv.mode === "development") configuration.devServer = { ...devServer }

  return configuration
}
