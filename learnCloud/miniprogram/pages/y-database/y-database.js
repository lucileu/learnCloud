// pages/y-database/y-database.js

// 1.获取数据库对象
const db = wx.cloud.database();

// 2.获取操作的集合
const collection = db.collection("students");

const limit = 3;

Page({

  data:({
    page: 0
  }),

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

  
  queryDataFromDB: function () {

    // 1.精确查找
    // collection
    //   .doc("255a5c90-a1eb-4741-bd3b-e91c674015a5")
    //   .get()
    //   .then(console.log)
    //   .catch(console.error)

    // 2.条件查找
    // collection
    //   .where({
    //   age: 25
    //   })
    //   .get()
    //   .then(console.log)
    //   .catch(console.log)
    
    // 3.使用查询指令数据查询
    // collection
    //   .where({
    //     age: db.command.gt(20)
    //   })
    //   .get()
    //   .then(console.log)
    //   .catch(console.log)

    // 4.根据正则表达式获取数据
    // collection
    //   .where({
    //     name: db.RegExp({
    //       regexp: "^yj.*",
    //       options: "i"
    //     })
    //   })
    //   .get()
    //   .then(console.log)
    //   .catch(console.log)

    // 5.不跟任何的条件，直接查询整个集合
    // collection
    //   .get()
    //   .then(console.log)
    //   .catch(console.log)

    // 6.几个字段的作用
    // field: 过滤只需要获取的字段
    // collection
    //   .where({ age: db.command.gte(25) })
    //   .field({
    //     name: true,
    //     age: true,
    //     height: true,
    //   })
    //   .get()
    //   .then(console.log)
    //   .catch(console.log)

    // skip: 跳过多少条数据
    // limit: 本次获取多少条数据
    // orderBy: 排序
    db.collection("lol")
      .skip(this.data.page * limit)
      .limit(limit)
      .orderBy("rid", "asc")
      .get()
      .then(res => {
        console.log(res);
        this.data.page += 1;
      })
      .catch(console.log)
  },

  startMonitor: function() {
    db.collection("chatroom")
      .where({ groupid: "110" })
      .watch({
        onChange: function(snap) {
          console.log(snap)
        },
        onError: function(err) {
          console.log(err)
        }
      })
  },

  sendMessage: function () {
    db.collection("chatroom")
      .add({
        data: {
          groupid: "110",
          message: "你吃了吗",
        }
      })
      .then(console.log)
      .catch(console.log)
  }

})