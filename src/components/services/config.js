
let NODE_ENV = process.env.NODE_ENV;
let IMG_SERVER = 'http://oss.zhulogic.com/';
let SERVER_URL = NODE_ENV === 'development' ? 'http://51xuewudao.cn/' : 'http://51xuewudao.cn/';

export default class {
  static IMG_SERVER = IMG_SERVER;
  static SERVER_URL = SERVER_URL;

  static API_WITH_TOKEN = {
    baseUrl: '/renren/',
    items: [
      'reclass',
      'restudents',
      'recourse',
    ]
  };
  static API_WITHOUT_TOKEN = {
    baseUrl: '/renren/sys/',
    items: [
      'login',
    ]
  };
}
