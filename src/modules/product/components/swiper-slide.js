import AppBase, {$app} from 'components/scripts/index';
import {Carousel} from 'antd-mobile';
import RA from 'react-avatar';

export default class extends React.Component {
  state = {
    initialHeight: 176,
  };
  render() {
    const {list} = this.props;
    return (
      <section className="detail-swiper">
        <Carousel
          className="swiper"
          autoplay={false}
          infinite
          selectedIndex={1}
          swipeSpeed={500}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}>
          {list && list.map((item, index) => (
            <RA key={index} url={`http://oss.zhulogic.com/${item}`} size="7.5rem" radius="0"/>
          ))}
        </Carousel>
      </section>
    )
  }
}
