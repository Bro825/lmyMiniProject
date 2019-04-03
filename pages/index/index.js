//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    constellation: [{
      name: '白羊座',
      img: '../../images/baiyang.png'
    }, {
      name: '金牛座',
      img: '../../images/jinniu.png'
    }, {
      name: '双子座',
      img: '../../images/shuangzi.png'
    }, {
      name: '巨蟹座',
      img: '../../images/juxie.png'
    }, {
      name: '狮子座',
      img: '../../images/shizi.png'
    }, {
      name: '处女座',
      img: '../../images/chunv.png'
    }, {
      name: '天秤座',
      img: '../../images/tianping.png'
    }, {
      name: '天蝎座',
      img: '../../images/tianxie.png'
    }, {
      name: '射手座',
      img: '../../images/sheshou.png'
    }, {
      name: '摩羯座',
      img: '../../images/mojie.png'
    }, {
      name: '水瓶座',
      img: '../../images/shuiping.png'
    }, {
      name: '双鱼座',
      img: '../../images/shuangyu.png'
    }],
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  toNext:function(e){
    console.log(e);
    wx.navigateTo({
      url: '../detail/detail?target='+e.currentTarget.dataset.no
    })
  },
  
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
      console.log(this.data.userInfo)
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})