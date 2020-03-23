// pages/y-storage/y-storage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageFileID: "",
    videoFileID: "",
    downloadVideoFileID: "",
  },

  uploadImage: function () {
    wx.chooseImage({
      success: (res) => {
        const filePath = res.tempFilePaths[0];
        const timeStamp = new Date().getTime();
        const openid = "dfjoi123";
        const cloudPath = `images/${timeStamp}_${openid}.png`;
        wx.cloud.uploadFile({
          filePath,
          cloudPath,
        }).then((res) => {
          console.log(res);
          this.setData({
            imageFileID: res.fileID
          })
        })
      },
    })
  },

  uploadVideo: function() {
    wx.chooseVideo({
      success: (res) => {
        const filePath = res.tempFilePath;
        const timeStamp = new Date().getTime();
        const openid = "dfjoi123";
        const cloudPath = `videos/${timeStamp}_${openid}.mp4`;
        wx.cloud.uploadFile({
          filePath,
          cloudPath,
        }).then((res) => {
          console.log(res);
          this.setData({
            videoFileID: res.fileID
          })
        })
      }
    })
  },

  getTempURL: function() {
    const fileID = "cloud://code-yj-ukuxa.636f-code-yj-ukuxa-1301132693/videos/1584696329072_dfjoi123.mp4";
    wx.cloud.getTempFileURL({
      fileList: [fileID],
    }).then(console.log)
  },

  downloadVideo: function() {
    wx.cloud.downloadFile({
      fileID: "cloud://code-yj-ukuxa.636f-code-yj-ukuxa-1301132693/videos/1584696329072_dfjoi123.mp4"
    }).then(res => {
      console.log(res);
      this.setData({
        downloadVideoFileID: res.tempFilePath
      })
    })
  },

  deleteFile: function() {
    const fileID = "cloud://code-yj-ukuxa.636f-code-yj-ukuxa-1301132693/images/1584693311531_dfjoi123.png";
    wx.cloud.deleteFile({
      fileList: [fileID]
    }).then(console.log)
  }
})