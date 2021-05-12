module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }

    return config
  },
  env: {
    NEXT_PUBLIC_GRAPHQL_BASE_URL: process.env.NEXT_PUBLIC_GRAPHQL_BASE_URL,
  }
}