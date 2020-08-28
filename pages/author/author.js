// pages/author/author.js
Page({
  /**
   * 页面的初始数据
   */
  data: {},
  getAddress () {
    wx.authorize({
      scope: 'scope.userLocation',
      success: () => {
        wx.getLocation({
          success (res) {
            console.log(res)
          }
        })
      }
    })
  },
  getPhoneAddress () {
    wx.authorize({
      scope: 'scope.address',
      success: () => {
        wx.chooseAddress({
          success (res) {
            console.log(res)
          }
        })
      }
    })
  },
  getStep () {
    wx.authorize({
      scope: 'scope.werun',
      success: () => {
        wx.getWeRunData({
          success (res) {
            console.log(res)
            self.getWeRunData()
            // // 拿 encryptedData 到开发者后台解密开放数据
            // const encryptedData = res.encryptedData
            // // 或拿 cloudID 通过云调用直接获取开放数据
            // const cloudID = res.cloudID
          }
        })
      }
    })
  },
  getWeRunData () {
    wx.getWeRunData({
      success (res) {
        console.log(res)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {}
})
