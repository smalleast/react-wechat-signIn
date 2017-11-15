import 'resolution';
import FastClick from 'fastclick';
import {ReduxAppBase} from 'd-react-redux';
import NxDomEvent from 'd-dom-event';
import Api from '../services/api';
import App from '../services/app';
import Config from '../services/config';
import Route from '../services/route';
import Wechat from '../services/wechat';


export default class AppBase extends ReduxAppBase {

  constructor(props) {
    super(props);

    nx.mix(AppBase, {
      $: props.$,
      $api: Api,
      $app: App,
      $config: Config,
      $route: Route,
      $hash: nx.hashlize()
    });

    //polyfill Promise:
    require('es6-promise').polyfill();

    //fastclick:
    FastClick.attach(document.body);
    Wechat.sign(false);
  }

  componentWillMount() {
      this.registReloadEvent();
  }

  onScrolling() {

  }

  registReloadEvent() {
    window.onpageshow = (event) => {
      if (event.persisted) {
        AppBase.command('page.iosInit');
      }
    };

    NxDomEvent.on(window, 'scroll', () => {
      this.onScrolling();
    });
  }

}

