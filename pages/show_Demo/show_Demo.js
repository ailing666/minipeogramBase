// pages/show_Demo/show_Demo.js
Page({
  /**
   * 页面的初始数据
   */
  data: {},
  toastClick () {
    wx.showToast({
      title: '点疼我了', //提示的内容
      // loading , success , none是不要图标
      icon: 'loading', //显示图标
      duration: 3000, //提示的延迟时间,默认1.5
      mask: false, //是否显示透明蒙层，防止触摸穿透
      success () {
        console.log('成功啦')
      },
      fail () {
        console.log('失败')
      },
      complete () {
        console.log('都会执行')
      }
    })
  },
  imgClick () {
    wx.showToast({
      title: '真相只有一个', //提示的内容
      icon: 'waring', //显示图标
      image: '/images/01.jpg',
      duration: 3000, //提示的延迟时间,默认1.5
      mask: false, //是否显示透明蒙层，防止触摸穿透
      success () {
        console.log('成功啦')
      },
      fail () {
        console.log('失败')
      },
      complete () {
        console.log('都会执行')
      }
    })
  },
  modelClick () {
    wx.showModal({
      title: '小艾同学', //标题
      content: '嘤嘤嘤嘤嘤嘤', //内容
      cancelText: '滚吧', //自定义取消按钮文字
      cancelColor: '#f34', //自定义取消颜色
      confirmText: '好的呢', //自定义确定按钮文字
      confirmColor: '#09f', //自定义确定颜色
      success (res) {
        if (res.confirm) {
          console.log('进到这里说明用户确定')
        } else if (res.cancel) {
          console.log('进到这里说明用户取消')
        }
      }
    })
  },
  loadClick () {
    wx.showLoading({
      title: '加载中'
    })

    setTimeout(function () {
      // 需要用hideLoading关闭加载框
      wx.hideLoading()
    }, 2000)
  },
  ActionSheet () {
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'], //按钮的文字数组,最多6个
      itemColor: '#f34', //按钮文字颜色
      success (res) {
        //成功回调函数
        console.log(res.tapIndex) //从上到下的索引
      },
      fail (res) {
        console.log(res.errMsg)
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
