import AppBase, {$api, $app, $store, $utils, $wechat} from 'components/scripts/index';
import RA from 'react-avatar';

export default class extends AppBase {

  static initialState() {
    return {
      local: {
        wxImages: []
      },
      memory: {
        list: [],
        top: {}

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
      this._recourse(user.userId).then((res) => {
        if (res.code === 0) {
          AppBase.$.memory = {
            list: res.list,
            top: res.list[0]
          }
        }

      });
    }
  }

  _recourse(userId) {
    return $api.recourse('get', userId, 'list');
  }


  componentDidMount() {


  }

  render() {
    const {list, top} = AppBase.$.memory;
    return (
      <div className="list">
        {
          !!top && <div className="row row-center wp-auto hd">
            {<div className="col tl c-50">{top.teacher}</div>}
            <div className="col tr c-137">{top.courseTime}</div>
          </div>
        }

        <div className="line-d-1"/>
        {
          list.length > 0 && list.map((item, index) => {
            return (<a key={index}
                       href={'detail.html?id=' + item.teacherId + '&name=' + item.name + '&time=' + item.courseTime + '&teacher=' + item.teacher + ''}>
              <div className="row row-center wp-auto bd">
                <div className="left tc">
                  <div className="left-avatar">
                    <RA size=".76rem" radius=".1rem"
                        url="http://oss.zhulogic.com/product_image/cp7b4b4b7c12e64b9b97ee06553eb3af90.png?x-oss-process=style/w660"/>
                  </div>
                </div>
                <div className="center tl">
                  {<output className="db c-50 name">{item.name}</output>}
                  <output className="c-137">1课次</output>
                </div>
                <div className="col right tr">
                  <div className="sign tc">
                    <output className="db f12">扫码签到</output>
                    <output className="f10">3人预约</output>
                  </div>
                </div>
              </div>
            </a>)
          })
        }

      </div>
    )
  }
}
