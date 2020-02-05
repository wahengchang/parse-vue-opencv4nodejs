# parse-vue-spa-server
This is a parse-server  project, with default config for `dashboard`, `graphQL` and `vue`(SPA not nuxt). Helping you to setup everything within a minute. 

[demo](https://parse-vue-spa-server.herokuapp.com/#/secret)

## vue-spa 
`http://localhost:8081/#/secret` (dev) or `http://localhost:1337/#/secret` (prod)
![image](https://user-images.githubusercontent.com/5538753/71544536-bde8df80-29bb-11ea-8fd7-cd05f94e2042.png)

## parse dashboard
http://localhost:1337/dashboard/login
![image](https://user-images.githubusercontent.com/5538753/73072279-c1568480-3eef-11ea-9508-2778fe85e298.png)


## parse graphql playground
http://localhost:1337/playground/
![image](https://user-images.githubusercontent.com/5538753/73072321-d29f9100-3eef-11ea-92bd-6521ad328102.png)


## 1.1 Project setup
```
yarn 
```
## 1.2 Config Setup

setup your env

```shell
#  parse-server 
echo "set DATABASE_URI"
export DATABASE_URI="mongodb://username:password@something.mlab.com:45380/something"
echo "set APP_ID"
export APP_ID="YOUTUB_APPLICATION_ID"
echo "set MASTER_KEY"
export MASTER_KEY="YOUTUB_MASTER_KEY"

#  s3-config for file upload
echo "set S3_ACCESS_KEY"
export S3_ACCESS_KEY="YOU_S3_ACCESS_KEY"
echo "set S3_SECRET_KEY"
export S3_SECRET_KEY="YOU_S3_SECRET_KEY"
echo "set S3_REGION"
export S3_REGION="ap-northeast-1"
echo "set S3_BUCKET"
export S3_BUCKET="bucketn-ame"

#  dashboard setup
echo "set PARSE_DASHBOARD_APP_ID"
export PARSE_DASHBOARD_APP_ID=$APP_ID
echo "set PARSE_DASHBOARD_MASTER_KEY"
export PARSE_DASHBOARD_MASTER_KEY=$MASTER_KEY
echo "set PARSE_DASHBOARD_SERVER_URL"
export PARSE_DASHBOARD_SERVER_URL="http://localhost:1337/parse"
echo "set PARSE_DASHBOARD_APP_NAME"
export PARSE_DASHBOARD_APP_NAME="MyApp"
echo "set PARSE_DASHBOARD_USER_ID"
export PARSE_DASHBOARD_USER_ID="yourDashboardUsername"
echo "set PARSE_DASHBOARD_USER_PASSWORD"
export PARSE_DASHBOARD_USER_PASSWORD="yourPASSWORD"

```


### 2.1 run in dev
```
yarn dev
```

### 2.2 run in prod
```
yarn server:prod
```


### 3.1 Routing
The routing logic, the often seen types are `requiredPublic`, `requiredLogin` and `requiredLogout`. And config the type on each `route item`, inside `meta: {permission}`



### 4 Routing
The routing logic, the often seen types are `requiredPublic`, `requiredLogin` and `requiredLogout`. And config the type on each `route item`, inside `meta: {permission}`
```js
const routes = [
  {
    path: '/',
    name: 'home',
    meta: {permission: requiredPublic},
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    meta: {permission: requiredLogout},
    component: Login
  },
  {
    path: '/logout',
    name: 'logout',
    meta: {permission: requiredLogin},
    component: Logout
  },
  {
    path: '/secret',
    name: 'secret',
    meta: {permission: requiredLogin},
    component: Secret
  },
  {
    path: '/error',
    name: 'error',
    meta: {permission: requiredPublic},
    component: () => import('../views/Error.vue')
  }
]
```

## Heroku Setup
```
$ heroku buildpacks:set starkast/cmake -a your-heroku-project
$ heroku buildpacks:add --index=1 https://github.com/onboardiq/heroku16-buildpack-opencv3.git -a your-heroku-project

$ heroku buildpacks:add --index=2 https://github.com/onboardiq/heroku-buildpack-go.git -a your-heroku-project
```


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Reference:
 - https://github.com/wahengchang/parse-vue-auth-router