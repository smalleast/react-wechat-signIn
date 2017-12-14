import AppBase, {$api, $app, $store, $utils, $wechat} from 'components/scripts/index';
import RA from 'react-avatar';
import logo from '../../assets/images/logo.png';

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
    this._recourse().then((res) => {
      AppBase.$.memory = {
        list: res,
        top: res[0]
      }
    });
  }

  _recourse(userId) {
    const {user_info} = $store.local;
    return $api.reclass('get', user_info.userId, 'lists');
  }


  componentDidMount() {


  }

  render() {
    const {list} = AppBase.$.memory;
    return (
      <div className="list">
        {
          list.length > 0 && list.map((item, index) => {
            return (<a key={index}
                       href={'detail.html?id=' + item.id + '&courseName=' + item.courseName + '&courseTime=' + item.courseTime + ''}>
              <div className="row row-center wp-auto bd">
                <div className="left tc">
                  <div className="left-avatar">
                    <RA size=".76rem" radius=".06rem"
                        url={logo}/>
                  </div>
                </div>
                <div className="center tl">
                  {<output className="db f14 c-50 name">{item.courseName}</output>}
                  <output className="f16 c-137">{item.courseTime}</output>
                </div>
                <div className="col right tr">
                  <div className="sign tc">
                    <output className="db f14">点名</output>
                  </div>
                </div>
              </div>
            </a>)
          })
        }
        {
          list.length ===0 &&<div className="c-3 f18 tc mt40">暂无课程表</div>
        }
      </div>
    )
  }
}
