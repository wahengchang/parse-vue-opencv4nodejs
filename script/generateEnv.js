const str = `
    VUE_APP_SERVER_URL=/parse
    VUE_APP_APP_ID=${process.env.APP_ID}
`
require('fs').writeFileSync(`${__dirname}/../.env`, str, 'utf8')