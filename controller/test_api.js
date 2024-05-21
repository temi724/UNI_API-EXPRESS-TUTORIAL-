const express = require('express')

module.exports.test_api = async (req, res) => {
      return res.json({
            message: "API is now live"
      })
}