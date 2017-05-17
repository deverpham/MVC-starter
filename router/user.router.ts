import {helper} from '../core/helper.service';
import {userController} from '../controller/user.controller';

let router = helper.newRouter();

router.post('/register',async (req:any,res:any) => {
    await helper.resRejectNull([
      'username',
      'password',
      'role'
    ],req,res);
    userController.register({
      id: helper.generateId(),
      username:req.body.username,
      password:req.body.password,
      role:req.body.role
    })
      .then(() => { res.send(helper.response('success','register successfully'))})
      .catch((err:any) => {res.status(500).send(helper.response('error',err))})
})

router.post('/login', async (req:any,res:any) => {
  let isNull =await helper.resRejectNull([
    'username',
    'password'
  ],req,res);
  if(isNull) return 0;
  userController.login(req.body.username,req.body.password)
    .then(() => {
      res.send(helper.response('success','login Sucessfully'))
    })

    .catch((err) => {
      res.status(500).send(helper.response('error',err))
    })
})

export default router;
