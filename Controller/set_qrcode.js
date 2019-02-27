const request = require('request')
const url = require('url')
const querystring = require('querystring')
const config = require('../config/wechat.config')

//  先获取二维马ticket
const getTicket = function(token){
    let scene_id = randomScene()

    return new Promise((resolve, reject) => {
        request({
            timeout: 5000,
            method: 'POST',
            url: config.qr_ticket,
            json: true,
            qs: {
                access_token: token,
            },
            body: {
                expire_seconds: 600,
                action_name: 'QR_SCENE',
                action_info: {
                    scene: {
                        scene_id: scene_id
                    }
                }
            }
        }, function (err, res, body) {
            if (!err && res.statusCode === 200) {
                body.scene_id = scene_id
                resolve(body)
            } else {
                reject(err)
            }
        })
    })
}

// 生成随即的场景值 10位数
const randomScene = function() {
    return Math.random().toFixed(9).toString().replace('0.', '') * 1 
}

//  根据ticket获取二维马图片  scene_id email
const getQrImg = function(ticket, email) {
    return `${config.qr_img}?ticket=${encodeURI(ticket.ticket)}&scene_id=${ticket.scene_id}&email=${email}`
}

// 返回二维马
const sendQrcode = function (req, res, next) {
    const access_token = req.access_token
    const urlParse = url.parse(req.url).query
    // 判断是否email值是否存在 不存在则使用随机值 权限为0
    const email = querystring.parse(urlParse)['email'] || ''

    getTicket(access_token)
        .then((ticket) => {
            const qrcode = getQrImg(ticket, email)
            res.send({url: qrcode})
        })
}

module.exports = sendQrcode