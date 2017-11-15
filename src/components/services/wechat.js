/**
 * Created by dcpai on 2017/7/17.
 */
import Api from './api';
import Config from './config';
import Wxsdk from 'react-wxsdk';


export default class Wechat {
  static sign(showMenu) {
    Api.wechat('get',{url: window.location.href.split('#')[0]},'jssdk').then((resp) => {
      Wxsdk.config(nx.mix(resp.data, {debug: false}));
    }, function (error) {
      // alert('error:' + nx.stringify(error));
    });
  }


  static settingShare(id) {
      Wxsdk.wx.ready(() => {
            ['onMenuShareAppMessage', 'onMenuShareTimeline', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone']
              .forEach((shareItem) => {
                Wxsdk.wx[shareItem]({
                  title:  '住逻辑',
                  imgUrl:'http://share.zhulogic.com/images/logo_app.png',
                  link: window.location.href.split('#')[0],
                  desc: '让好设计完美落地！',
                  success: function () {
                    //WxUtils.toast('已分享~');
                  },
                  cancel: function (res) {
                    Wechat.toast('已取消')
                  },
                  fail: function (res) {
                    //alert('Failed:'+JSON.stringify(res));
                    Wechat.toast('分享失败')
                  }
                })
              });
          });
  }

  static previewImage(inCurrent, inItems) {
    const current =Config.IMG_SERVER +'/'+ (nx.isNumber(inCurrent) ? inItems[inCurrent] : inCurrent);
    const items = inItems || [current];
    Wxsdk.previewImage({
      current: current,
      urls: Wechat.isAbsolutePath(items)
    });
  }

  static isAbsolutePath(inItems) {
    return inItems.map((item, index) => {
      return Config.IMG_SERVER +'/'+ item;
    })
  }

}
