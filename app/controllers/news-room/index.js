import Controller from '@ember/controller';
import { inject as controller } from '@ember/controller';

export default class NewsRoomIndexControler extends Controller {

  @controller('news-room') newsRoomController;

  get queryParamValues() {
    let {
      newsRoomController: {
        queryParamValues,
      },
    } = this;
    return queryParamValues;
  }
}
