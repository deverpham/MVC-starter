var express = require('express');
var appRouter =express.Router();

appRouter.get('/',(req:any,res:any) => {
  res.render('index')
});

export default appRouter;
