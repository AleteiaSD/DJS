const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/instagram",
    createProxyMiddleware({
      target: "https://graph.instagram.com",
      changeOrigin: true,
      pathRewrite: {
        "^/instagram": "",
      },
    })
  );
};
