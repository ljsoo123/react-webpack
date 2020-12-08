const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js", //entry는 웹팩이 빌드할 파일을 알려준다.
  output: {
    //output은 빌드를 완료하면 output의 정보를 통해 빌드 파일을 생성한다.
    filename: "bundle.js",
    path: path.resolve(__dirname + "/build"),
  },
  devserver: {
    port: 9000,
  },
  mode: "none",
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: "/node-modules", use: ["babel-loader"] },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      //HtmlWebpackPlugin 은 웹팩 빌드 시 output에 있는 bundles.js를 자동으로 import 한다.
      template: "./public/index.html", //이 파일을 읽는다.
      filename: "index.html", //output으로 출력할 파일의 이름을 적는다.
    }),
  ],
};
