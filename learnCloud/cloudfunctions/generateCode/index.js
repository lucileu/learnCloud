// 云函数入口文件
const cloud = require('wx-server-sdk')
const { WXMINIUser, WXMINIQR } = require('wx-js-utils')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  let wXMINIUser = new WXMINIUser({
    appId: "wx7a5fbbf03896889a",
    secret: "292e1b7a8f655000aac71edd5cd8e6d0"
  });

  // 一般需要先获取 access_token
  let access_token = await wXMINIUser.getAccessToken();
  let wXMINIQR = new WXMINIQR();

  let qrResult = await wXMINIQR.getMiniQRLimit({
    access_token,
    path: 'pages/index/index',
    is_hyaline: true
  });

  const stampTime = new Date().getTime();
  const openID = wxContext.OPENID;
  return cloud.uploadFile({
    cloudPath: `images/${stampTime}_${openID}_miniCode.png`,
    fileContent: qrResult
  })
}