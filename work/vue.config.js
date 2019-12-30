const dataList = require('./public/mock/data.json')

module.exports = {
    lintOnSave: false,
    devServer: {
        before(app) {
            app.get('/api/list',(req,res) => {
                res.json({
                    errCode: 0,
                    data: dataList
                })
            })
        }
    }
}