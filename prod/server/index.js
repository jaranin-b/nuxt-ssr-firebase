const functions = require('firebase-functions')
const { Nuxt } = require('nuxt')

const config = {
  dev: false,
  buildDir: 'nuxt',
  build: {
    publicPath: '/assets/'
  }
}
const nuxt = new Nuxt(config)

exports.nuxtssr = functions.https.onRequest(async (req, res) => {
  await nuxt.ready()
  nuxt.render(req, res)
})
