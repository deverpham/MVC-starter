const uniqueString = require('unique-string')
const express = require('express');
class HelperService {
    newRouter () {
      return express.Router();
    }




    response(status:string,value:any) {
      this.log('error-string',value)
      return {
          status:status,
          value:value
        }
    }

    generateId():string {
        return uniqueString();
    }

    checkNull(variable:any) {
      return variable==undefined
    }

    log(name:string,message:string) {
      console.log(`${name.toUpperCase()} : ${message}`);
    }

    resRejectNull(listKey:any,req:any,res:any) {

      return new Promise((resolve:any,reject:any) => {
        listKey.forEach((key:any,i:number) => {

          this.log(`checking params ${key} is not valid;`,this.checkNull(req.body[key]).toString())
          if (this.checkNull(req.body[key]) || req.body[key]=='')
          {

            res.status(500).send(this.response('error',`Missing params ${key} or empty value`))
              resolve(true)
          }
          if(i == listKey.length-1) resolve(false)
        })
      })

    }


}
export  let helper = new HelperService();
