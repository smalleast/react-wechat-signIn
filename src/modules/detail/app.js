import AppBase, {$api, $app, $store, $utils, $wechat} from 'components/scripts/index';
import classNames from 'classnames';
import {Modal} from 'antd-mobile';

export default class extends AppBase {

  static initialState() {
    return {
      local: {
        wxImages: []
      },
      memory: {
        list: [{
          active: false
        }, {
          active: true
        }, {
          active: false
        }, {
          active: false
        }, {
          active: true
        }]
      }
    }
  }

  componentWillMount() {
    this.init();
  }

  init() {
    const {user_info} = AppBase.$.local;
    if (typeof user_info === 'string') {
      let user = JSON.parse(user_info);
      console.log('user:', user.username);
      this._restudents().then((res) => {
        if (res.code === 0) {
          AppBase.$.memory = {
            list: res.list
          }
        }

      });
    }
  }

  _restudents() {
    const {id} = nx.hashlize();
    return $api.restudents('get', id, 'list');
  }

  signClick = (item) => {
    const alertInstance = Modal.alert('确认签到', '您确认要签到吗？签到后是不能取消的哦，请谨慎操作哦', [
      {
        text: '取消', onPress: () => {
        console.log('取消');
      }
      },
      {
        text: '确认', onPress: () => {
        console.log('确认');
        item.active = true;
        const {list} = AppBase.$.memory;
        AppBase.$.memory = {
          list: list
        }
      }
      }
    ])
  };

  componentDidMount() {

  }

  render() {
    const {list} = AppBase.$.memory;
    const {name, teacher, time} = nx.hashlize();
    return (
      <div className="detail">
        <div className="hd bg-47">
          <div className="content tc">
            {<output className="f16 c-f db">{name}</output>}
            {<output className="f10 c-f db mt10">{teacher}</output>}
            {<output className="f10 c-f db mt5">{time}</output>}
          </div>
        </div>
        <div className="bd">
          {
            list.length > 0 && list.map((item, index) => {
              return ( <div key={index} className="list">
                <div className="row row-center">
                  <div className="col left pl10 tl">
                    {<output className="db c-50">{item.name}</output>}
                    {<output className="db c-137 mt5">{item.phone}</output>}
                  </div>
                  <div className="col right pr10 tr">
                    <button onClick={this.signClick.bind(this, item)}
                            className={classNames('button', {'active': item.active})}>签到
                    </button>
                  </div>
                </div>
              </div>)
            })
          }

        </div>
      </div>
    )
  }
}
