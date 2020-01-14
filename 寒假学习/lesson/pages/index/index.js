// pages/love/love.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: '',
    isClear: false,
    searchHistory: ['许嵩', '周杰伦', '蜗牛'],
    isShowSearchHistory: false
  },
 
  search (e) {
    // console.log(e)
    if (e.detail.value) {
      this.setData({
        inputValue: e.detail.value,
        isClear: true
      })
    } else {
      this.setData({
        isClear: false
      })
    }

    this.setData({
      isShowSearchHistory: true
    })

    const that = this
    wx.request({
      url: 'http://neteasecloudmusicapi.zhaoboy.com/search',
      data: { keywords: e.detail.value, type: 1, limit:10, offset: 2},
      header: {'Content-Type': 'application/x-www-form-urlencoded'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res)
        // ......

        search.addEventListener('search', debounce(handle, 1000));

        function debounce(fn, wait) {
          var timeout = null;
          return function () {
            if (timeout !== null) clearTimeout(timeout);
            timeout = setTimeout(fn, wait);
          }
        }
         
        // 加上一个防抖，（限制历史搜索记录的条数）

        let history = [...that.data.searchHistory, e.detail.value]
        that.setData({
          searchHistory: history
        })
        wx.setStorageSync('searchHistory', that.data.searchHistory)
      },
      fail () {

      }
    })
  },

  clearInput () {
    console.log(123)
    this.setData({
      inputValue: '',
      isClear: false
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      searchHistory: wx.getStorageSync('searchHistory')
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})