const port = process.env.PORT || 1337
module.exports = {
    devServer: {
      proxy: `http://localhost:${port}`
    }
  }