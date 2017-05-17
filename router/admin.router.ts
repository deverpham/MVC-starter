var express = require('express');
var router =express.Router();

router.get('/',(req:any,res:any) => {
  res.render('admin/index');
});
router.get('/product',(req:any,res:any) => {
  res.render('admin/product')
})

export default router;
