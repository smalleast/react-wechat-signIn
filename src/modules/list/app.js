import AppBase, {$api, $app, $store, $utils, $wechat} from 'components/scripts/index';
import RA from 'react-avatar';

export default class extends AppBase {

  static initialState() {
    return {
      local: {
        wxImages: []
      },
      memory: {
        imgList: [],
        detail: {},
        changeData: []
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

  render() {
    const {detail, imgList, changeData} = AppBase.$.memory;
    return (
      <div className="list">
        <div className="row row-center wp-auto hd">
          <div className="col tl">费先生</div>
          <div className="col tr">09:23-10:20</div>
        </div>
        <div className="line-d-1"/>
        <div className="row row-center wp-auto bd">
          <div className="left tc">
            <RA size=".76rem" url="http://oss.zhulogic.com/product_image/cp7b4b4b7c12e64b9b97ee06553eb3af90.png?x-oss-process=style/w660"/>
          </div>
          <div className="center tl">
            <output className="db">舞蹈课001</output>
            <output>1课次</output>
          </div>
          <div className="col right tr">
            <div className="sign">
              <output className="db">扫码签到</output>
              <output>3人预约</output>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
