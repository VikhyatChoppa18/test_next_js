const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // Adjust the path if needed
    createProxyMiddleware({
      target: 'https://www.datainception.co/PlayFive/play5_loginapi.php', // Replace with the actual API base URL
      changeOrigin: true,
    })
  );
};
