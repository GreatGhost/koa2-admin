
const upload = (ctx, next) => {
    ctx.body={
        code:0,
        msg:'上传成功',
        data:ctx.file.filename
    }
};

module.exports = {
    upload,
};
