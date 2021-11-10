const development = require('./env/development')
const production = require('./env/production')
const test = require('./env/test')

module.exports = {
  // eslint-disable-next-line object-shorthand
  development: development,
  // eslint-disable-next-line object-shorthand
  production: production,
  // eslint-disable-next-line object-shorthand
  test: test
}[process.env.NODE_ENV || 'development']
