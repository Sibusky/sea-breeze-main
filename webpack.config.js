const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // плагин, который объединяет
// много css файлов в один
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // плагин, который чистит папку dist
const HtmlWebpackPlugin = require('html-webpack-plugin'); // плагин html

module.exports = {
  target: 'web',
  entry: './src/js/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development', // включаем режим разработчика
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 5500,
    hot: true,
    open: true, // сайт будет открываться cам при запуске
    compress: true, // ускоряет работу в режиме разработки
  },
  module: {
    rules: [
      // rules — это массив правил
      // добавим в него объект правил для бабеля
      {
        // регулярное выражение, которое ищет все js файлы
        test: /\.js$/,
        // при обработке этих файлов нужно использовать babel-loader
        use: 'babel-loader',
        // исключает папку node_modules, файлы в ней обрабатывать не нужно
        exclude: '/node_modules/',
      },
      {
        // регулярное выражение, которое ищет все файлы с такими расширениями
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource', // переносит файлы в том же формате
      },
      {
        // применять это правило только к CSS-файлам
        test: /\.scss$/,
        // при обработке этих файлов нужно использовать
        // MiniCssExtractPlugin.loader и css-loader
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [require('autoprefixer')],
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // класс плагина html
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(), // класс плагина для чистки dist
    new MiniCssExtractPlugin(), // подключение плагина для объединения файлов
  ],
};
