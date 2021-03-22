const development = require('./env/development')
const production = require('./env/production')
const test = require('./env/test')

module.exports = {
    development: development,
    production: production,
    test: test
} [process.env.NODE_ENV || 'development']