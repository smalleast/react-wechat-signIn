
let NODE_ENV = process.env.NODE_ENV;
let IMG_SERVER = 'http://oss.zhulogic.com/';
let SERVER_URL = NODE_ENV === 'development' ? 'http://test.zhulogic.com' : 'http://webapi.zhulogic.com';

export default class {
  static IMG_SERVER = IMG_SERVER;
  static SERVER_URL = SERVER_URL;

  static API_WITH_TOKEN = {
    baseUrl: '/designer_api/',
    items: [
      'wechat',
    ]
  };
  static API_WITHOUT_TOKEN = {
    baseUrl: '/designer_api/',
    items: [
      'products',
    ]
  };
}
