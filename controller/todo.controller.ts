import {helper} from '../core/helper.service';
import {modelService} from '../core/service/model.service'
class TodoController {
  private todoModel:any;

  private async init() {
    this.todoModel = await modelService.connectModel('todo')
  }

  constructor () {
    this.init();
  }
  addNew(data:any) {

    return new Promise((resolve:any,reject:any) => {
      data.status = 'yetstart';
      data.date = new Date();
      data.id =helper.generateId()
      modelService.modelCreate(this.todoModel,data)
          .then(() => {
            resolve()
          })
          .catch((err:any) => {
            reject(err);
          })
    })
  }

  deleteTodo(id:string) {
    return new Promise((resolve:any,reject:any) => {
      modelService.modelDelete(this.todoModel,id)
          .then(() => {
            resolve()
          })
          .catch((err:any) => {
            reject(err);
          })
    })
  }

  getTodayList() {
    return new Promise((resolve:any,reject:any) => {
      modelService.modelGet(this.todoModel)
          .then((results) => {
            resolve(results)
          })
          .catch((err:any) => {
            reject(err);
          })
    })
  }
  changeStatus(id:string,currentStatus:string) {
    return new Promise((resolve:any,reject:any) => {

      switch(currentStatus) {
          case 'yetstart' :
          modelService.modelChange(this.todoModel,id,{
            status:'inprogress'
          })
            .then((results) => {
              resolve('inprogress')
            })
            .catch((err:any) => {
              reject(err);
            })
          break;
          case 'inprogress' :
          modelService.modelChange(this.todoModel,id, {
            status:'completed'
          })
            .then((results) => {
              resolve('completed')
            })
            .catch((err:any) => {
              reject(err);
            })
          break;
      }

    })

  }
}

export let todoController = new TodoController();
