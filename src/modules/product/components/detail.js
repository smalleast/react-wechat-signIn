import AppBase, {$app, $utils} from 'components/scripts/index';
import {Button} from 'antd-mobile';

export default class extends React.Component {


  render() {
    const {detail, changeData} = this.props;
    return (
      <div className="detail">
        <article className="detail-name">
          <div className="row row-no-padding wp-auto row-center">
            <div className="col-100 db_">
              <output className="name lc-1"> {detail.name}</output>
              <output className="code lc-1">{detail.code}</output>
            </div>
          </div>
        </article>
        <article className="detail-specs wp-auto">
          <div className="detail-specs-title">规格</div>
          {
            changeData.length > 0 && changeData.map((item, index) => (
              <div key={index} className="row row-no-padding row-center mb20">
                <div className="col-100 lh20 db_">
                  <output>颜色：{item.color}</output>
                  <output>规格：{item.size}</output>
                  <output>描述：{item.material}</output>
                </div>
              </div>
            ))
          }

        </article>
        <a className="btnOpenApp2">
          <div className="wp-auto detail-button">
            更多订制，打开住逻辑APP
          </div>
        </a>
      </div>
    );
  }
}

