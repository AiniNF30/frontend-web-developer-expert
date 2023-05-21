/* eslint-disable prefer-regex-literals */
import { merge } from 'webpack-merge';
import { GenerateSW } from 'workbox-webpack-plugin';
import common from './webpack.common';

export default merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new GenerateSW({
      swDest: './sw.bundle.js',
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://restaurant-api.dicoding.dev/'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'TheEatry-v1',
            cacheableResponse: {
              statuses: [200],
            },
          },
        },
      ],
    }),
  ],
});
