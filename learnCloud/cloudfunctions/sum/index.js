// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  console.log("ceshi");
  const sum = event.sum1 + event.sum2;
  return sum;
}