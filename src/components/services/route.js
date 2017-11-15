import Config from './config';

export default class Route {

  static addUniqueTag(inUrl, dontAdd) {
    if (dontAdd === true) return inUrl;
    const publishVersion = Config.PUBLISH_VERSION;
    let urlArray = inUrl.split('#');
    let url = urlArray[0];
    if (url) {
      if (url.indexOf('?') >= 0) {
        url += `&v=${publishVersion}`;
      }
      else {
        url += `?v=${publishVersion}`;
      }
      urlArray[0] = url;
    }
    return urlArray.join('#')
  }

  static go(inUrl, dontAddTag) {
    location.href = Route.addUniqueTag(inUrl, dontAddTag);
  }

  static replace(inUrl, dontAddTag) {
    location.replace(Route.addUniqueTag(inUrl, dontAddTag));
  }

  static back() {
    window.history.back();
  }
}
