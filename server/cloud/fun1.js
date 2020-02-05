Parse.Cloud.define("fun1", async (req) => {
    console.log('req.params: ', req.params)
    return 'ok'
});
