import dotenv = require('dotenv');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
module.exports = (on: any, config: any) => {
  dotenv.config();

  config.env.graphql_url = process.env.REACT_APP_GRAPHQL_URL;

  return config;
};
