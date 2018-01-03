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
        }],
        hasOver: false
      }
    }
  }

  componentWillMount() {
    this.init();
  }

  init() {
    this._restudents().then((res) => {
      AppBase.$.memory = {
        list: res
      }
    });
  }

  _restudents() {
    const {id} = nx.hashlize();
    return $api.restudents('get', id, 'lists');
  }

  _restudentsQiandao(studentId) {
    const {id} = nx.hashlize();
    return $api.restudents('get', studentId + '/' + id, 'qiandao');
  }

  _recourseQiandao(studentId) {
    const {id} = nx.hashlize();
    const {user_info} = $store.local;
    if(!user_info){
      location.href = 'index.html';
    }
    return $api.recourse('get', id + '/' + user_info.userId, 'qiandao');
  }

  signClick = (item) => {
    const alertInstance = Modal.alert('确认签到', '您确认【' + item.name + '】签到吗？签到后是不能取消的哦，     请谨慎操作哦', [
      {
        text: '取消', onPress: () => {
          console.log('取消');
        }
      },
      {
        text: '确认', onPress: () => {
          item.active = true;
          this._restudentsQiandao(item.id).then(res => {
            console.log('学生签到成功:', res);
          })
        }
      }
    ])
  };
  overClick = (item) => {
    const alertInstance = Modal.alert('确认签到', '您确认结课签到吗？签到后是不能取消的哦，     请谨慎操作哦', [
      {
        text: '取消', onPress: () => {
          console.log('取消');
        }
      },
      {
        text: '确认', onPress: () => {
          const {hasOver} = AppBase.$.memory;
          this._recourseQiandao().then(res => {
            console.log('老师签到成功:', res);
            AppBase.$.memory = {
              hasOver: true
            }
          })
        }
      }
    ])

  };

  componentDidMount() {

  }

  render() {
    const {list, hasOver} = AppBase.$.memory;
    const {courseName, courseTime} = nx.hashlize();
    return (
      <div className="detail">
        <div className="hd bg-47">
          <div className="content tc">
            {<output className="f26 c-f db">{courseName}</output>}
            {<output className="f20 c-f db mt10">{courseTime}</output>}
          </div>
        </div>
        <div className="bd">
          {
            list.length > 0 && list.map((item, index) => {
              return (<div key={index} className="list">
                <div className="row row-center">
                  <div className="col left pl10 tl">
                    {<output className="db f18 c-50">{item.name } <span
                      className="f14 ml10 c-137">剩余{item.times || 0}课次</span></output>}
                    {<output className="db f14 c-137 mt5">{item.phone }</output>}
                  </div>
                  <div className="right pr10 tr">
                    <button onClick={this.signClick.bind(this, item)}
                            className={classNames('button', {'active': item.active})} disabled={item.active}>签到
                    </button>
                  </div>
                </div>
              </div>)
            })
          }

        </div>
        <div className="fd mt20">
          {<button onClick={this.overClick.bind(this)} className={classNames('button button-over f18', {'active': hasOver})}
                   disabled={hasOver}>
            结课打卡
          </button>}
        </div>
      </div>
    )
  }
}
