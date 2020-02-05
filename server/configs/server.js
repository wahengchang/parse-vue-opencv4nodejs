const HOST_URL = process.env.HOST_URL || 'localhost'
const port = process.env.PORT || 1337

module.exports = {
    databaseURI: process.env.DATABASE_URI,
    cloud: `${__dirname}/../cloud/main.js`, // Absolute path to your Cloud Code
    appId: process.env.APP_ID,
    masterKey: process.env.MASTER_KEY, // Keep this key secret!
    fileKey: 'optionalFileKey',
    serverURL: `http://${HOST_URL}:${port}/parse`, // Don't forget to change to https if needed
    mountGraphQL: true,
    mountPlayground: true,
    publicServerURL: `http://${HOST_URL}:${port}/parse`,
    "filesAdapter": {
      "module": "@parse/s3-files-adapter",
      "options": {
        "bucket": process.env.S3_BUCKET,
        // optional:
        "region": process.env.S3_REGION, // default value
        "bucketPrefix": '', // default value
        "directAccess": false, // default value
        "baseUrl": null, // default value
        "baseUrlDirect": false, // default value
        "signatureVersion": 'v4', // default value
        "globalCacheControl": null, // default value. Or 'public, max-age=86400' for 24 hrs Cache-Control
        "ServerSideEncryption": 'AES256|aws:kms', //AES256 or aws:kms, or if you do not pass this, encryption won't be done
        "validateFilename": null, // Default to parse-server FilesAdapter::validateFilename.   
        "generateKey": null // Will default to Parse.FilesController.preserveFileName
      }
    }  
}