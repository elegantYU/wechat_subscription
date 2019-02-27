const express = require('express')
const router = express.Router()
const useCache = require('./get_accessToken')

router.use(function(req, res, next){
  useCache(req, res, next)
})

module.exports = router