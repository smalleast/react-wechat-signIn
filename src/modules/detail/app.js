import AppBase, {$api, $app, $store, $utils,$wechat} from 'components/scripts/index';



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
    this._products().then(res => {
      let specs = res.data.specs;
      AppBase.$.memory = {
        detail: res.data,
        changeData: specs
      };

      this._swiperList(res.data);
    })
  }

  _products() {
    const {id} = nx.hashlize();
    return $api.products('get',id,'share');
  }

  _swiperList(inData) {
    let list = [];
    inData.partFiles && inData.partFiles.map((item, index) => {
      list.push(item.key);
    });

    AppBase.$.memory = {imgList: list}
  }

  componentDidMount() {
    $utils.downloadLink();
    const {id} = nx.hashlize();
    $wechat.settingShare(id);

  }

  render() {
    const {detail, imgList, changeData} = AppBase.$.memory;
    return (
      <div className="product-detail">

      </div>
    )
  }
}
