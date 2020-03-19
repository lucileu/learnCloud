// pages/y-database/y-database.js

// 1.获取数据库对象
const db = wx.cloud.database();

// 2.获取操作的集合
const collection = db.collection("students");

Page({

  addDataToDB: function() {
    collection.add({
      data: {
        name: "tom",
        age: 28,
        height: 1.88,
        courses: ["现在经济", "统计学", "现代文学"],
        goodFriend: {
          name: "hanmeimei",
          age: 20
        },
        location: db.Geo.Point(112, 23),
        birth: new Date("1995-05-05")
      }
    }).then(console.log)
      .catch(console.log)
  },
  
  removeDataToDB: function() {
    collection
      .doc("d7e7dede5e7318fb0004ed483b4795f2")
      .remove()
      .then(console.log)
      .catch(console.log)
  },

  updataDataToDB: function () {
    collection
      .doc("255a5c90-a1eb-4741-bd3b-e91c674015a5")
      .set({
        data: {
          score: 100,
          age: 25
        }
      })
      .then(console.log)
      .catch(console.log)
  },

  queryDataToDB: function () {

  },
})