// 只能用相对路径，不能用绝对路径（绝对会报错）
var postData = require('../../data/post-data.js')
Page({
  // 小程序总是会读取data对象来做数据绑定，这个动作我们称作动作A
  // 而这个动作A的的执行，是在onLoad事件执行之后发生的
  data: {
    title: 'hello'
  },
  progress: function() {},
  onLoad: function(options) {
    // 页面初始化，options为页面跳转所带来的参数{对象}
    console.log('onLoad')
    console.log(options)
    // 数据抽离（模拟后台数据获取）
    // var post_content1 = {
    //   date: '2018/07/21',
    //   title: '7月的天，孩子的脸，一直在变~~~',
    //   img: {
    //     author_image: '/images/shui.jpeg',
    //     image0: '/images/sleep.jpg',
    //     image1: '/images/sleep.jpg',
    //     image2: '/images/xin.jpeg'
    //   },
    //   // 用一个变量为布尔类型来控制标签的显隐
    //   condition: true,
    //   img_condition: true
    // }
    // this.setData(post_content1)
    // 必須this.setData
    this.setData({
      post_key: postData.postList
    })
    console.log(postData.postList)
  },
  onReady: function() {
    console.log('onReady')
  },
  onShow: function() {
    console.log('onShow')
  },
  onHide: function() {
    console.log('onHide')
  },
  onUnload: function() {
    console.log('onUnload')
  },
  onPullDownRefresh: function() {
    console.log('onPullDownRefresh')
  },
  onReachBottom: function() {
    console.log('onReachBottom')
  },
  onShareAppMessage: function() {
    console.log('onShareAppMessage')
  },
  onPageScroll: function() {
    console.log('onPageScroll')
  },
  onTabItemTap() {
    console.log('item.index')
  },
  // Event handler.
  viewTap: function() {
    this.setData(
      {
        text: 'Set some data for updating view.'
      },
      function() {
        // this is setData callback
      }
    )
  },
  customData: {
    hi: 'MINA'
  },
  // 得到一个结论：template只是一个占位符（有效的是里面的内容，所以给template绑定事件没有效果）
  onPostTap: function(event) {
    var postId = event.currentTarget.dataset.postid;
    // console.log(event.currentTarget)
    console.log('postid:' + postId);
    // 页面详情跳转：先静后动，先样式后数据
    wx.navigateTo({
        url:'./post-detail/post-detail'
    })
  }
})
