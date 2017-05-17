import {helper} from '../core/helper.service';
import {modelService} from '../core/service/model.service';
class UserController {
  userModel :any;

  async init() {
    this.userModel = await modelService.connectModel('user')
  }

  constructor () {
    this.init();
  }

  async register(data:any) {
  let results:any = await this.checkUsernameIsExists(data.username);
    return new Promise((resovle:any,reject:any) => {

      if(results.length>0) {

          reject('username is used')
          return 0;
      }
      modelService.modelCreate(this.userModel,data)
        .then(() => resovle())
        .catch((err:any) => reject(err))
    })
  }

  checkUsernameIsExists(username:string) {
    return new Promise((resolve:any) => {
      this.userModel.find({
        where :{
          username : username
        }
      })
        .then((results:any) => {
          resolve(results)
        })
    })

  }

  login(username:any,password:any) {
    return new Promise((resolve:any,reject:any) => {
      this.userModel.find({
        where :{
          username: username,
          password : password
        }
      })
        .then((results:any) => {
          if(results.length > 0) resolve()
          else reject('username or password not correct')
        })
    })
  }
}

export let userController = new UserController();
