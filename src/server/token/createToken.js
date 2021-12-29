const jwt = require('jsonwebtoken');

module.exports = (user) => {
    const token = jwt.sign({
        userId: user.id,
        userName: user.user_name
    }, 'kuaifengle', {
        expiresIn: '24h'
    })
    return token;
}