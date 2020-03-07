const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app) {
    app.use('/hd', 
    createProxyMiddleware({ 
              target: 'https://www.smartisan.com/',
              changeOrigin: true,
              pathRewrite:{
                  "^/hd":""
              } 
            }
         ));
}
