// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const withImages = require('next-images')
// module.exports = {
//   images: {
//     domains: [
//     ]
//   },
//   ...withImages({
//     esModule: true,
//     target: 'serverless'
//   })
// }
module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }

    return config
  }
}