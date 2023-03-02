const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // плагин, который объединяет
// много css файлов в один
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // плагин, который чистит папку dist
const HtmlWebpackPlugin = require('html-webpack-plugin'); // плагин html

module.exports = {
  target: 'web',
  entry: {
    index: './src/js/index.js',
    about: './src/js/about.js',
    blog: './src/js/blog.js',
    contacts: './src/js/contacts.js',
    piers: './src/js/piers.js',
    marinas: './src/js/marinas.js',
    outfit: './src/js/outfit.js',
    post: './src/js/post.js',
  },
  optimization: {
    splitChunks: {
      // extract shared dependencies from entry bundles:
      chunks: 'all',
      // allow any size dependency to be shared:
      // minSize: 0,
    },
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development', // включаем режим разработчика
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 5500,
    hot: true, // горячая перезагрузка
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
        test: /\.(png|svg|jpg|gif|ico|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource', // переносит файлы в том же формате
      },
      {
        // применять это правило только к CSS-файлам
        test: /\.css$/,
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
      filename: 'index.html',
      template: './src/pages/index.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: './src/pages/about.html',
      chunks: ['about'],
    }),

    new HtmlWebpackPlugin({
      filename: 'blog.html',
      template: './src/pages/blog.html',
      chunks: ['blog'],
    }),
    new HtmlWebpackPlugin({
      filename: 'contacts.html',
      template: './src/pages/contacts.html',
      chunks: ['contacts'],
    }),
    new HtmlWebpackPlugin({
      filename: 'piers.html',
      template: './src/pages/piers.html',
      chunks: ['piers'],
    }),
    new HtmlWebpackPlugin({
      filename: 'marinas.html',
      template: './src/pages/marinas.html',
      chunks: ['marinas'],
    }),
    new HtmlWebpackPlugin({
      filename: 'outfit.html',
      template: './src/pages/outfit.html',
      chunks: ['outfit'],
    }),
    new HtmlWebpackPlugin({
      filename: 'post.html',
      template: './src/pages/post.html',
      chunks: ['post'],
    }),
    new CleanWebpackPlugin(), // класс плагина для чистки dist
    new MiniCssExtractPlugin(), // подключение плагина для объединения файлов
  ],
};
