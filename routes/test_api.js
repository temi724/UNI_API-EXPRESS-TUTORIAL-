const express = require('express')
const { test_api } = require('../controller/test_api')


//http://localhost:4000/api/unilist/v1/hello
module.exports = (router) => {
      router.get("/hello", test_api)
}