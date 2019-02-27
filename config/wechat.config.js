const DEFAULT_CONFIG = {
  appid: 'xxxxxxxxxxx',
  appsecret: 'xxxxxxxxxxxxxxxxxxxx',
  token: 'xxxxx',
  // api
  access_token: 'https://api.weixin.qq.com/cgi-bin/token',
  //  获取二维马的ticket
  qr_ticket: 'https://api.weixin.qq.com/cgi-bin/qrcode/create',
  //  使用ticket换取二维马图片
  qr_img: 'https://mp.weixin.qq.com/cgi-bin/showqrcode',
  //  获取用户基本信息
  userinfo: 'https://api.weixin.qq.com/cgi-bin/user/info'
}

module.exports = DEFAULT_CONFIG