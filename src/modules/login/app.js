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
    AppBase.$.local = {
      [inField]: inEvent.target.value
    };
  }

  btnLogin() {
    const {username, password} = AppBase.$.local;
    console.log('u:', username);
    console.log('p:', password);
    alert('登录提示', '用户名：' + username + '密码：' + password + '', [
      {
        text: '确认',
        onPress: () => {
          Toast.loading('登录中...', 1, () => {
            location.href = 'list';
          })
        }
      }
    ])
  }

  render() {
    const {username, password} = AppBase.$.local;
    return (
      <List className="login" id="login">
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
