const { createProxyMiddleware } = require("http-proxy-middleware" )

module.exports = app => {
    app.use(
        createProxyMiddleware('/entries',{
            target: 'https://api.publicapis.org',
            changeOrigin: true
        })
    )
}