import Parse from 'parse'

Parse.initialize(process.env.VUE_APP_APP_ID);
Parse.serverURL = process.env.VUE_APP_SERVER_URL

console.log('[INFO] initated parse.com')