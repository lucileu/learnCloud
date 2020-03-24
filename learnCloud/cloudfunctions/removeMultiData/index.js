// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const db = cloud.database();
  const collection = db.collection("students");

  return collection
    .where({
      age: db.command.gte(20)
    })
    .remove()
}