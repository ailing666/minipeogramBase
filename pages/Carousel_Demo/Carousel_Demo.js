// pages/Carousel_Demo/Carousel_Demo.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    imgList: [
      '/images/01.jpg',
      '/images/02.jpg',
      '/images/03.jpg',
      '/images/04.jpg',
      '/images/05.jpg'
    ]
  },
  prevClick () {
    if (this.data.index === 0) {
      this.setData({
        index: 4
      })
    }
    this.setData({
      index: this.data.index - 1
    })
  },
  nextClick () {
    if (this.data.index === 4) {
      this.setData({
        index: 0
      })
    }
    this.setData({
      index: this.data.index + 1
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
