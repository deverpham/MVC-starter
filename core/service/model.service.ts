import {app} from '../../server';
class ModelService {

  connectModel(name:string) {
    return new Promise((resolve:any) => {

      var pointer = setInterval(() => {
        if(app.models!=undefined) {
          clearInterval(pointer);
          resolve(app.models[name])
        }
      },100)
    })
  }

  modelCreate(model:any,data:any) {
    return new Promise((resolve:any,reject:any) =>
     {
      try {
          model.create(data,(err:any,object:any) => {
            if(err) reject(err.toString())
            resolve(object)
          })
        }
      catch(err) {

        reject(err.toString());
      }
    })
  }

  modelDelete(model:any,id:string) {
    return new Promise((resolve:any,reject:any) =>
     {
      try {
          model.destroyById(id,(err:any,object:any) => {
            if(err) reject(err.toString())
            resolve(object)
          })
        }
      catch(err) {

        reject(err.toString());
      }
    })
  }

  modelChange(model:any,id:string,dataChange:any) {
    return new Promise((resolve:any,reject:any) =>
     {
      try {
          model.upsertWithWhere({
            id:id
          },dataChange,(err:any,object:any) => {
            if(err) reject(err.toString())
            resolve(object)
          })
        }
      catch(err) {

        reject(err.toString());
      }
    })
  }
  modelGet(model:any) {
    return new Promise((resolve:any,reject:any) =>
     {
      try {
          model.find((err:any,object:any) => {
            if(err) reject(err.toString())
            resolve(object)
          })
        }
      catch(err) {

        reject(err.toString());
      }
    })
  }
}

export let modelService = new ModelService();
