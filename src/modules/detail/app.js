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

  }

  signClick = () => {
    const alertInstance = Modal.alert('确认签到', '您确认要签到吗？签到后是不能取消的哦，请谨慎操作哦', [
      {
        text: '取消', onPress: () => {
        console.log('取消');
      }
      },
      {
        text: '确认', onPress: () => {
        console.log('确认');
      }
      }
    ])
  };

  componentDidMount() {

  }

  render() {
    const {list} = AppBase.$.memory;
    return (
      <div className="detail">
        <div className="hd bg-47">
          <div className="content tc">
            <output className="f16 c-f db">舞蹈课001</output>
            <output className="f10 c-f db mt10">费先生</output>
            <output className="f10 c-f db mt5">11月12号-09:23-10:20</output>
          </div>
        </div>
        <div className="bd">
          {
            list.map((item, index) => {
              return ( <div key={index} className="list">
                <div className="row row-center">
                  <div className="col left pl10 tl">
                    <output className="db c-50">费先生</output>
                    <output className="db c-137">18520953265</output>
                  </div>
                  <div className="col right pr10 tr">
                    <button onClick={this.signClick.bind(this)}
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
