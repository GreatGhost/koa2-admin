const jwt = require('jsonwebtoken');

module.exports = (user) => {
    const token = jwt.sign({
        userId: user.id,
        userName: user.user_name,
        time: Date.now(),
        timeout: 60*1000*60*24*7,
    }, 'kuaifengle')
    return token;
}