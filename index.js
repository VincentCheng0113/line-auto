let linebot = require('linebot'),
    express = require('express');
const config = require('./config.json'),
    util = require('util');
let bot = linebot({
    channelId: '1534759491',
    channelSecret: 'aa1f34c7555fb1538ae2aaa9ad185c4b',
    channelAccessToken: '/n4MFEQHAlmTtr8eur7lKYIzdw1E9t5o7rVN9OpdFnBG84y1w8pRdJLk0DiZNuPhSPoJVxgHxnol2Jm6s4eWXvYtaV2p29Oa2SVEEtr7zNCuXrKQhchXiHC/LUIVU9zH6hBfxPwApkdZzK48nURqjwdB04t89/1O/w1cDnyilFU='
});
const linebotParser = bot.parser(),
    app = express();
bot.on('message', function(event) {
    // 把收到訊息的 event 印出來
    console.log(event);
});
app.post('/webhook', linebotParser);
// 在 localhost 走 8080 port
let server = app.listen(process.env.PORT || 8080, function() {
    let port = server.address().port;
    console.log("My Line bot App running on port", port);
});
