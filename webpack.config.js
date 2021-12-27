const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

const path = require('path');

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3002,
  },
   module: {
     rules: [
       {
         test: /\.tsx?$/,
         use: 'ts-loader',
         exclude: /node_modules/,
       },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
      
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
     ],
   },
   resolve: {
     extensions: [ '.tsx', '.ts', '.js' ],
   },
   output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
  plugins: [
    // To learn more about the usage of this plugin, please visit https://webpack.js.org/plugins/module-federation-plugin/
    new ModuleFederationPlugin({
      name: "reactRemoteLoader",
          library: { type: "var", name: "reactWebComponent" },
          filename: "remoteEntry.js",
          exposes: {
              './web-components': './src/App.js',
          },
          shared: ["react", "react-dom"]
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
