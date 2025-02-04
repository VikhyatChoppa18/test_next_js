const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  reactStrictMode: true,
  /* other config options for optimized images here */
});

module.exports = {
  async rewrites() {
    return [
      {
        source: '/PlayFive/:path*',
        destination: 'https://www.datainception.co/PlayFive/:path*',
      },
      { source: '/UpgradePaywithpaypal/success', destination: '/SuccessPage' },
      { source: '/UpgradePaywithpaypal/cancel', destination: '/CancelPage' },
    ];
  },
};
