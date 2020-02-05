const port = process.env.PORT || 1337
module.exports = {
    "apps": [
      {
        "serverURL": process.env.PARSE_DASHBOARD_SERVER_URL,
        "appId": process.env.APP_ID,
        "masterKey": process.env.MASTER_KEY,
        "appName": process.env.PARSE_DASHBOARD_APP_NAME,
        graphQLServerURL: `http://${process.env.HOST_URL}:${port}/graphql`
      }
    ],
    "users": [
      {
        "user":process.env.PARSE_DASHBOARD_USER_ID,
        "pass":process.env.PARSE_DASHBOARD_USER_PASSWORD
      }
    ]
  }