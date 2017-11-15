/*===default start===*/
export default require('./app-base').default;
/*===default start===*/


/*===mixins start===*/
export const CommonMixin = require('./mixins/common').default;
export const OnChangeMixin = require('./mixins/on-change').default;
/*===mixins end===*/



/*===services start===*/
import Api from '../services/api';
import App from '../services/app';
import Config from '../services/config';
import Utils from '../services/utils';
import Wechat from '../services/wechat';
import Route from '../services/route';



export const $api = Api;
export const $app = App;
export const $config = Config;
export const $utils = Utils;
export const $wechat = Wechat;
export const $route = Route;

export const $store = require('react-store');
/*===services end===*/

