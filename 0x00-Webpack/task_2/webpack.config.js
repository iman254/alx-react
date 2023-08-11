import { resolve } from "path";

export const mode = "production";
export const entry = {
  main: resolve(__dirname, "./js/dashboard_main.js"),
};
export const output = {
  path: resolve(__dirname, "public"),
  filename: "bundle.js",
};
export const performance = {
  hints: false,
  maxEntrypointSize: 512000,
  maxAssetSize: 512000,
};
export const module = {
  rules: [
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    },
    {
      test: /\.(gif|png|jp?g|svg)$/i,
      use: [
        "file-loader",
        {
          loader: "image-webpack-loader",
          options: {
            bypassOnDebug: true,
            disable: true,
          },
        },
      ],
    },
  ],
};