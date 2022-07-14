const {
    createProxyMiddleware
} = require("http-proxy-middleware")

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: "http://60.205.95.118:8000",
            changeOrigin: true,
            pathRewrite: {
                "^/api": ""
            }
        })
    )
}