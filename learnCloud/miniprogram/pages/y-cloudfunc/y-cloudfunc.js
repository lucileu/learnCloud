// pages/y-cloudfunc/y-cloudfunc.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    miniCodeFileID: ""
  },

  basicUsing: function () {
    wx.cloud.callFunction({
      name: "sum",
      data: {
        sum1: 200,
        sum2: 300
      }
    }).then(console.log)
  },

  getOpenID: function() {
    wx.cloud.callFunction({
      name: "login",
    }).then(res => {
      console.log(res);
    })
  },

  removeMultiData: function() {
    wx.cloud.callFunction({
      name: "removeMultiData"
    }).then(console.log)
  },

  generateCode: function() {
    wx.cloud.callFunction({
      name: "generateCode"
    }).then(res => {
      this.setData({
        miniCodeFileID: res.result.fileID
      })
    })
  },

  submitForm: function(evt) {
    const formId = evt.detail.formId;
    wx.cloud.callFunction({
      name: "submitForm",
      data: {
        formId
      }
    }).then(res => {
      console.log(res)
    })
  },

  subscribeMessage: function() {
    
    wx.requestSubscribeMessage({
      tmplIds: ['1ttTJyI-G0wF9OqoI-y0fTfo9zpfJOXAABzEUhGzu2o'],
      success: (res) => {
        if (res.errMsg === "requestSubscribeMessage:ok") {
          
          console.log("订阅成功");
        }
      }
    })
  },

  sendSubscribeMessage: function() {
    wx.cloud.callFunction({
      name: "sendSubscribeMessage"
    }).then(res => {
      console.log(res);
    })
  },
})