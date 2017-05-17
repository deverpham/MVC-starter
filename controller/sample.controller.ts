import {helper} from '../core/helper.service';
class UserController {
  sampleModel:any;
  async init() {
    this.sampleModel = await helper.connectModel('sample')
  }

  constructor () {
    this.init();
  }
}

export let userController = new UserController();
