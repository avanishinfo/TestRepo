const { createProxyMiddleware } = require(" http-proxy-middleware" )

module.exports = app => {
    app.use(
        createProxyMiddleware('/p9/MOXAPI.ashx',{
            target: 'https://translate.moxwave.com',
            changeOrigin: true
        })
    )
}