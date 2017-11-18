import AppBase, {$api, $app, $store, $utils, $wechat} from 'components/scripts/index';
import RA from 'react-avatar';

export default class extends AppBase {

  static initialState() {
    return {
      local: {
        wxImages: []
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

  render() {
    const {list} = AppBase.$.memory;
    return (
      <div className="list">
        <div className="row row-center wp-auto hd">
          <div className="col tl c-50">费先生</div>
          <div className="col tr c-137">09:23-10:20</div>
        </div>
        <div className="line-d-1"/>
        {
          list.map((item, index) => {
            return ( <a key={index} href="detail"><div className="row row-center wp-auto bd">
              <div className="left tc">
                <div className="left-avatar">
                  <RA size=".76rem" radius=".1rem"
                      url="http://oss.zhulogic.com/product_image/cp7b4b4b7c12e64b9b97ee06553eb3af90.png?x-oss-process=style/w660"/>
                </div>
              </div>
              <div className="center tl">
                <output className="db c-50 name">舞蹈课001</output>
                <output className="c-137">1课次</output>
              </div>
              <div className="col right tr">
                <div className="sign tc">
                  <output className="db f12">扫码签到</output>
                  <output className="f10">3人预约</output>
                </div>
              </div>
            </div></a>)
          })
        }

      </div>
    )
  }
}
