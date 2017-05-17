import {helper} from '../core/helper.service';
import {todoController} from '../controller/todo.controller';

let router = helper.newRouter();
router.get('/today', (req:any,res:any) => {
    todoController.getTodayList()
    .then((results) => {
      res.send(helper.response('success',results))
    })

    .catch((err:any) => {
      res.status(500).send(helper.response('error','some thing happen :' + err))
    })
})

router.post('/add', async (req:any,res:any) => {

  var isNull = await helper.resRejectNull([
    'name',
    'priority',
    'category',
    'description'
  ],req,res);

  if(isNull) return 0;
  todoController.addNew(req.body)
    .then(() => {
      res.send(helper.response('success','Add todo action completed'))
    })

    .catch((err:any) => {
      res.status(500).send(helper.response('error','some thing happen :' + err))
    })
})

router.post('/delete',async (req:any,res:any) => {
  var isNull = await helper.resRejectNull([
    'todoid'
  ],req,res);
  if(isNull) return 0;

  todoController.deleteTodo(req.body.todoid)
  .then(() => {
    res.send(helper.response('success','Delete todo action completed'))
  })
  .catch((err:any) => {
    res.status(500).send(helper.response('error','some thing happen :' + err))
  })
})

router.post('/changestatus',async (req:any,res:any) => {
  var isNull = await helper.resRejectNull([
    'todoid',
    'currentstatus'
  ],req,res);
  if(isNull) return 0;
  todoController.changeStatus(req.body.todoid,req.body.currentstatus)
    .then((status:string) => {
      res.send(helper.response('success',status))
    })
    .catch((err:any) => {
      res.status(500).send(helper.response('error','some thing happen :' + err))
    })
})
export default router;
