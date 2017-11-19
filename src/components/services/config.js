
let NODE_ENV = process.env.NODE_ENV;
let IMG_SERVER = 'http://oss.zhulogic.com/';
let SERVER_URL = NODE_ENV === 'development' ? 'http://121.196.209.131:8080/' : 'http://121.196.209.131:8080/';

export default class {
  static IMG_SERVER = IMG_SERVER;
  static SERVER_URL = SERVER_URL;

  static API_WITH_TOKEN = {
    baseUrl: '/renren-security/',
    items: [
      'recourse',
      'restudents'
    ]
  };
  static API_WITHOUT_TOKEN = {
    baseUrl: 'renren-security/sys/',
    items: [
      'login',
    ]
  };
}
