module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: [
          { loader: "babel-loader" },
          { loader: "ts-loader" },
          {
            loader: 'tslint-loader',
            options: {
              typeCheck: true,
              // tslint時に自動的に修正しない
              fix: false,
              // warningをエラーにする
              emitErrors: true
            },
          },
        ],
        exclude: /node_modules/
      }
    ]
  },
};
