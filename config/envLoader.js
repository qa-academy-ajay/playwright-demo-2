const path = require('path');
const dotenv = require('dotenv');

function loadEnv() {
  const envName = process.env.TEST_ENV || 'qa';

  const envPath = path.resolve(__dirname,`./env/${envName}.env`);

  dotenv.config({ path: envPath });

  console.log(`Running tests on environment: ${envName}`);
}

module.exports = { loadEnv };