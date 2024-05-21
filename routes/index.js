const express = require('express')

const router = express.Router()
const test_api = require('./test_api')
const uniroutes = require('./uniroutes')


module.exports = () => {
    test_api(router)
    uniroutes(router)
    return router
}