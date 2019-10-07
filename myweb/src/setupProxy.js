const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    proxy("/webajax", {
      target: "http://push.workingx.xyz:8000",
      changeOrigin: true,
      secure: false
    })
  );
  app.use(
    proxy("/files", {
      target: "http://push.workingx.xyz:8000",
      changeOrigin: true,
      secure: false
    })
  );
};
