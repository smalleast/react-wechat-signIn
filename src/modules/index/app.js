import AppBase, {$api, $app, $store, $utils, $wechat} from 'components/scripts/index';
import {List, Modal, Button, Toast, WhiteSpace} from 'antd-mobile';

const alert = Modal.alert;
export default class extends AppBase {

  static initialState() {
    return {
      local: {
        username: '',
        password: ''
      },
      memory: {
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      }
    }
  }

  componentWillMount() {
    this.init();
  }

  init() {

  }


  componentDidMount() {


  }

  _onChangeToLocal(inField, inEvent) {
    $store.local = {
      [inField]: inEvent.target.value
    };
  }

  verification() {
    const {username, password} = $store.local;
    if (username === '') {
      Toast.fail('用户名不能为空', 2);
      return false;
    }
    if (password === '') {
      Toast.fail('密码不能为空', 2);
      return false;
    }
    return true;
  }

  btnLogin() {
    const {username, password} = $store.local;
    if (this.verification()) {
      $api.login('get', {
        username: username,
        password: password
      }).then((res) => {
        if (res.code === 0) {
          $store.local = {
            user_info: res.user
          };
          location.href = 'list.html';
        } else if (res.code === 500) {
          Toast.fail(res.msg, 2);
        }
      });
    }
  }

  render() {
    const {username, password} = AppBase.$.local;
    return (
      <List className="login" id="login">
        <div className="login-title wp-10 tc">教师登录</div>
        <div className="i-list">
          <input className="wp-10 username" value={username} type="text" placeholder="请输入用户名"
                 onChange={this._onChangeToLocal.bind(this, 'username')}/>
        </div>
        <div className="i-list">
          <input className="wp-10 password" value={password} type="password" placeholder="请输入密码"
                 onChange={this._onChangeToLocal.bind(this, 'password')}/>
        </div>
        <div>
          <Button className="mt20" onClick={this.btnLogin.bind(this)}>登录</Button>
        </div>
      </List>
    )
  }
}
