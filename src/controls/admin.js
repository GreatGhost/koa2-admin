const userModel = require("../server/models/user")
const createToken = require("../server/token/createToken")
const UUID = require("uuid")

// 登录
const adminSignIn = async (ctx, next) => {
  const formData = ctx.request.body
  await userModel
    .findUser(formData.username)
    .then((res) => {
      if (!res.length) {
        ctx.body = {
          code: 103,
          msg: "用户未注册",
        }
      } else {
        const result = res[0]
        if (result.password != formData.password) {
          ctx.body = {
            code: 104,
            msg: "账户或密码不正确",
          }
        } else {
          let token = createToken(result)
          console.log("成功")
          ctx.request.headers.authorization = token
          ctx.body = {
            code: 0,
            msg: "成功",
            data: {
              username: result.user_name,
              id: result.id,
            },
            token,
          }
        }
      }
    })
    .catch((err) => {
      ctx.body = {
        code: 101,
        msg: err,
      }
    })
  next()
}

// 注册
const adminSignUp = async (ctx, next) => {
  const formData = ctx.request.body
  const res = await userModel.findUser(formData.username)
  if (res.length > 0) {
    try {
      throw new Error("用户已存在")
    } catch (err) {}
    ctx.body = {
      code: 101,
      msg: "用户已存在",
    }
  } else {
    var id = UUID.v1()

    await userModel
      .addUser([id, formData.username, formData.password])
      .then((res) => {
        var token = createToken({
          user_name: formData.username,
          id: id,
        })
        ctx.request.headers.authorization = token
        ctx.body = {
          code: 0,
          msg: "成功",
          token: token,
          data: {
            id: id,
            username: formData.username,
          },
        }
      })
      .catch((err) => {
        console.log(err)
        ctx.body = {
          code: 100,
          msg: err,
        }
      })
  }
}

// 获取所有用户
const adminUsers = async (ctx, next) => {
  const formData = ctx.request.body
  const { page, pagesize } = formData
  const res = await userModel.findAllUser(page, pagesize)
  const count = await userModel.findUserCount()
  if (res.length) {
    ctx.body = {
      code: 0,
      data: res,
      total: count[0]["count(*)"],
    }
  } else {
    ctx.body = {
      code: 0,
      data: [],
      total: count[0]["count(*)"],
    }
  }
}

// 删除用户
const delUser = async (ctx, next) => {
  const formData = ctx.request.body
  const { userId } = formData

  try {
    const res = await userModel.delUser(userId)
    ctx.body = {
      code: 0,
      msg: "删除成功",
    }
  } catch (err) {
    console.log(err)
    ctx.body = {
      code: -1,
      msg: "删除失败",
    }
  }
}
const adminApiConfig = {
  adminSignIn,
  adminSignUp,
  adminUsers,
  delUser,
}

module.exports = adminApiConfig
