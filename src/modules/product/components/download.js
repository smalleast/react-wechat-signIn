import AppBase, {$app, $utils} from 'components/scripts/index';
import RA from 'react-avatar';
import logo from '../../../assets/images/logo_app.png';

export default class extends React.Component {

  render() {
    return (
      <section className="download">
        <a className="btnOpenApp">
          <div className="row row-no-padding row-center">
            <div className="left tc">
              <RA url={logo} size=".68rem" radius="0"/>
            </div>
            <div className="col center db_">
              <output className="download-title">住逻辑</output>
              <output className="download-desc mt5">让好设计完美落地</output>
            </div>
            <div className="right tc">
              去打开APP
            </div>
          </div>
        </a>
      </section>
    )
  }
}
