var express = require('express');
var router = express.Router();

var init = require('../Controller/init_server')
var wechat = require('../Controller/get_wechatRevice')
var sendQrcode = require('../Controller/set_qrcode')

/* GET home page. */
router
  // 微信服务器验证token接口
  .get('/', function(req, res, next) {
    init(req, res, next)
  })
  // 接收微信服务器发送数据接口
  .post('/', function(req, res, next) {
    wechat.revice(req, res, next)
  })
  // 导出二维码链接接口
  .get('/qrImg', function( req, res, next){
    sendQrcode(req, res, next)
  })
  //  导出用户信息接口
  .get('/userInfo', function (req, res, next) {
    wechat.checkUserInfo(req, res, next)
  })

module.exports = router;
