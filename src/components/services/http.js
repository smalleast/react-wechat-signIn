import nxAxios from 'react-axios';
import $store from 'react-store';
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
      this.initHeaders();
      this.setDefaults({
        timeout: 600000,
        baseURL: Config.SERVER_URL || './'
      });
    },
    initHeaders: function () {

    },
    error: function (errorResponse) {
      const defer = Q.defer();
      const $hash = nx.hashlize();
      return defer.reject(errorResponse);
    },
    toData: function (inResponse) {
      return inResponse.data;
    },
    authorization: function (inRequest) {
      console.log(inRequest);
      const {user_info} = $store.local;
      if (user_info && user_info.salt) {
        inRequest.headers.common['Authorization'] = user_info.salt;
      }
      return inRequest;
    }
  }
});

export default WeiPaiHttp.getInstance();



