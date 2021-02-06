const isProd = process.env.NODE_ENV === 'production'

module.exports =   {
    basePath: '/nextjs-study',
    assetPrefix: isProd ? 'https://sshplendid.github.io/nextjs-study' : '',
  }
