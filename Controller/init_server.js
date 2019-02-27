const crypto = require('crypto')
const url = require('url')
const querystring = require('querystring')
const config = require('../config/wechat.config')

const init = function (req, res, next) {
  const query = url.parse(req.url).query
  const fields = querystring.parse(query)
  //  获取字段值
  const signature = fields['signature']
  const timestamp = fields['timestamp']
  const nonce = fields['nonce']
  const echostr = fields['echostr']
  //  字段值序列化
  const cacheArr = [config.token, timestamp, nonce].sort().join('')
  const code = crypto.createHash('sha1').update(cacheArr).digest('hex')
  //  验证通过回馈微信服务器
  if (code === signature) {
    res.end(echostr)
  } else {
    res.end('not from weixin')
  }
}

module.exports = init