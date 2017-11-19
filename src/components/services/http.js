import nxAxios from 'react-axios';
import nxStore from 'react-store';
import Config from './config';
import Q from 'q';
import $route from './route';
import axios from 'axios';

const WeiPaiHttp = nx.declare({
  extends: nxAxios,
  statics: {
    instance: null,
    getInstance: function () {
      if (!WeiPaiHttp.instance) {
        WeiPaiHttp.instance = new WeiPaiHttp();
      }
      return WeiPaiHttp.instance;
    }
  },
  methods: {
    init: function () {
      const env = nx.hashlize().env;
      this.$base.init.call(this);
      this.authorization();
      this.initHeaders();
      this.setDefaults({
        timeout: 600000,
        baseURL: Config.SERVER_URL || './'
      });
      this.setRequestInterceptor();
    },
    initHeaders: function () {
      //mock:
      // let hash = nx.hashlize();
      // let token = hash.token;
      // if (token) {
      //   this.setHeaders({
      //     common: {
      //       'Authorization': `Bearer ${token}`
      //     }
      //   })
      // }
    },
    setRequestInterceptor: function () {

    },
    error: function (errorResponse) {
      const defer = Q.defer();
      const $hash = nx.hashlize();
      return defer.reject(errorResponse);
    },
    toData: function (inResponse) {
      return inResponse.data;
    },
    authorization: function () {
      nxStore.engine = "localStorage";
      const user_info = nxStore.get('user_info');
      if (user_info && user_info.accessToken) {
        this.setHeaders({
          common: {
            'Authorization': `Bearer ${user_info.salt}`
          }
        });
      }
    }
  }
});

export default WeiPaiHttp.getInstance();



