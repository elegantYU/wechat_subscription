class Utils {
    checkEmail (str) {
        const reg = /@qq.com/g
        if (reg.test(str)) {
            console.log(str)
            return true
        } else {
            return false
        }
    }
}

module.exports = new Utils()