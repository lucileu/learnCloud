// 云函数入口文件
const cloud = require('wx-server-sdk')
const {
  WXMINIUser,
  WXMINIMessage
} = require('wx-js-utils');


cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  // 获取 access_token
  let wXMINIUser = new WXMINIUser({
    appId: "wx7a5fbbf03896889a",
    secret: "292e1b7a8f655000aac71edd5cd8e6d0"
  });

  const access_token = await wXMINIUser.getAccessToken();
  const touser = wxContext.OPENID; // 小程序用户 openId，从用户端传过来，指明发送消息的用户
  const form_id = event.formId; // 小程序表单的 form_id，或者是小程序微信支付的 prepay_id
  const template_id = '1ttTJyI-G0wF9OqoI-y0fTfo9zpfJOXAABzEUhGzu2o'; // 小程序模板消息模板 id

  // 发送模板消息
  let wXMINIMessage = new WXMINIMessage();
  let result = await wXMINIMessage.sendMessage({
    access_token,
    touser,
    form_id,
    template_id,
    data: {
      keyword1: {
        value: '囍乐微甜' // keyword1 的值
      },
      keyword2: {
        value: '2020-03-23' // keyword2 的值
      },
      keyword3: {
        value: '30元' // keyword3 的值
      },
      keyword4: {
        value: 'KN857' // keyword4 的值
      },
      keyword5: {
        value: '2020-03-24' // keyword5 的值
      }
    },
    page: 'pages/index/index' // 点击模板消息后，跳转的页面
  });

  return result;
}