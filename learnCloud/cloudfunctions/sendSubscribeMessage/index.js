// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  
  const touser = wxContext.OPENID;
  const templateId = '1ttTJyI-G0wF9OqoI-y0fTfo9zpfJOXAABzEUhGzu2o';
  try {
    const result = await cloud.openapi.subscribeMessage.send({
      touser,
      templateId: "1ttTJyI-G0wF9OqoI-y0fTfo9zpfJOXAABzEUhGzu2o",
      data: {
        thing6: {
          value: '囍乐微甜'
        },
        time8: {
          value: '2020-03-23' 
        },
        amount11: {
          value: '30元' 
        },
        character_string3: {
          value: 'KN857' 
        },
        date5: {
          value: '2020-03-24' 
        },
      },
      
      page: 'pages/index/index',
    })
    console.log(result)
    return result
  } catch (err) {
    console.log(err)
    return err
  }
}