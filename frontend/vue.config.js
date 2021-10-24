    // vue.config.js
    module.exports = {
      chainWebpack: config => {
        config
        .plugin('html')
        .tap(args => {
          args[0].title = 'Cryptotax'
          return args
        })
      },
      css: {
        loaderOptions: {
          sass: {
            prependData: `
              @import "@/styles/_variables.scss";
              @import "@/styles/layout.scss";
            `
          }
        }
      }
    }
